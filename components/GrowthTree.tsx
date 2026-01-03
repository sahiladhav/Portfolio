"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";

interface Milestone {
    type: "education" | "experience";
    year: string;
    title: string;
    subtitle: string;
    description: string;
    id: number;
}

export default function GrowthTree() {
    const containerRef = useRef<HTMLDivElement>(null);

    const milestones: Milestone[] = [
        {
            type: "education",
            year: portfolioData.about.education[0].year,
            title: portfolioData.about.education[0].degree,
            subtitle: portfolioData.about.education[0].school,
            description: portfolioData.about.education[0].description,
            id: 0
        },
        {
            type: "experience",
            year: portfolioData.about.experience[0].year,
            title: portfolioData.about.experience[0].role,
            subtitle: portfolioData.about.experience[0].company,
            description: portfolioData.about.experience[0].description,
            id: 1
        },
        {
            type: "experience",
            year: portfolioData.about.experience[1].year,
            title: portfolioData.about.experience[1].role,
            subtitle: portfolioData.about.experience[1].company,
            description: portfolioData.about.experience[1].description,
            id: 2
        },
        {
            type: "education",
            year: portfolioData.about.education[1].year,
            title: portfolioData.about.education[1].degree,
            subtitle: portfolioData.about.education[1].school,
            description: portfolioData.about.education[1].description,
            id: 3
        }
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-20 px-6">
            {/* SVG Line - Center */}
            <div className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 h-full w-1 z-0">
                <div className="w-full h-full bg-[#E8E1D5]/20 rounded-full" />
                <motion.div
                    style={{ scaleY: scrollYProgress, originY: 0 }}
                    className="absolute top-0 left-0 w-full bg-[#E8E1D5] rounded-full"
                />
            </div>

            {/* Nodes */}
            <div className="relative z-10 space-y-24">
                {milestones.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center">
                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-24 md:text-right' : 'md:order-last md:pl-24 md:text-left'}`}
                            >
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E8E1D5]/60 mb-2 block">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black text-[#E8E1D5] mb-2 uppercase tracking-tighter">
                                    {item.title}
                                </h3>
                                <div className="text-[#E8E1D5]/80 text-sm font-bold uppercase tracking-widest mb-4">
                                    {item.subtitle}
                                </div>
                                <p className="text-[#E8E1D5]/70 text-lg md:text-xl font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>

                            {/* Center Node */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#E8E1D5] shadow-[0_0_20px_rgba(232,225,213,0.5)] z-20">
                                <div className="w-2 h-2 rounded-full bg-[#3B5249]" />
                            </div>

                            {/* Empty Side for Balance on Desktop */}
                            <div className="hidden md:block w-1/2" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
