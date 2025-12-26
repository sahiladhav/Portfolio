"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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

    // Manual Order: Newest (Top) -> Oldest (Bottom)
    const milestones: Milestone[] = [
        {
            type: "education",
            year: portfolioData.about.education[0].year, // 2025-2027
            title: portfolioData.about.education[0].degree,
            subtitle: portfolioData.about.education[0].school,
            description: portfolioData.about.education[0].description,
            id: 0
        },
        {
            type: "experience",
            year: portfolioData.about.experience[0].year, // 2023-2025
            title: portfolioData.about.experience[0].role,
            subtitle: portfolioData.about.experience[0].company,
            description: portfolioData.about.experience[0].description,
            id: 1
        },
        {
            type: "experience",
            year: portfolioData.about.experience[1].year, // 2021-2022
            title: portfolioData.about.experience[1].role,
            subtitle: portfolioData.about.experience[1].company,
            description: portfolioData.about.experience[1].description,
            id: 2
        },
        {
            type: "education",
            year: portfolioData.about.education[1].year, // 2019-2023
            title: portfolioData.about.education[1].degree,
            subtitle: portfolioData.about.education[1].school,
            description: portfolioData.about.education[1].description,
            id: 3
        }
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-20">

            {/* SVG Line - Center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-20 z-0 hidden md:block">
                <svg className="w-full h-full text-gray-200 overflow-visible" preserveAspectRatio="none">
                    {/* Background Path */}
                    <path
                        d="M 40 0 V 1000"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Animated Path */}
                    <motion.path
                        d="M 40 0 V 1000"
                        stroke="var(--accent-color)"
                        strokeWidth="2"
                        fill="none"
                        style={{ pathLength }}
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>

            {/* Nodes */}
            <div className="relative z-10 space-y-24">
                {milestones.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={item.id} className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>

                            {/* Text Side */}
                            <div className={`w-full md:w-1/2 ${isLeft ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'} text-center md:text-left`}>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">
                                    {item.subtitle}
                                </div>
                                <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">
                                    {item.year}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Center Node */}
                            <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                                <div className="w-4 h-4 rounded-full bg-gray-200 border-2 border-white shadow ring-2 ring-gray-100 group-hover:bg-[var(--accent-color)] transition-colors"></div>
                                <motion.div
                                    style={{ opacity: pathLength }} // Fade in based on scroll? Or just scale.
                                    className="absolute inset-0 w-8 h-8 rounded-full border-2 border-[var(--accent-color)] opacity-0"
                                />
                            </div>

                            {/* Empty Side for Balance */}
                            <div className="hidden md:block w-1/2" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
