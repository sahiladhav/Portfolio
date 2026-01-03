"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolio';

function ProjectSlideshow({ images, title }: { images: string[], title: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full group overflow-hidden rounded-3xl shadow-2xl bg-white/5">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - image ${currentIndex + 1}`}
                        fill
                        className="object-contain p-4 md:p-8"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#3B5249]' : 'w-2 bg-[#3B5249]/20'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

// Helper to convert paragraph text to bullets based on common delimiters
const bulletize = (text: string) => {
    return text.split(/[.;] /).filter(s => s.trim().length > 0).map(s => s.trim().replace(/\.$/, ''));
};

export default function ProjectGrid() {
    const { projects } = portfolioData;

    return (
        <div className="space-y-0">
            {projects.map((project, idx) => {
                const challengeBullets = bulletize(project.challenge);
                const solutionBullets = bulletize(project.solution);
                const impactBullets = bulletize(project.impact);

                return (
                    <section
                        key={project.id}
                        className="min-h-screen flex items-center relative snap-start py-20"
                    >
                        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                            {/* Visual Side */}
                            <div className="lg:col-span-6 xl:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="aspect-[16/10] w-full"
                                >
                                    <ProjectSlideshow images={project.images} title={project.title} />
                                </motion.div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-6 xl:col-span-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#3B5249]/60 bg-[#3B5249]/5 px-3 py-1 rounded-full border border-[#3B5249]/10">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-[#3B5249] mb-6 uppercase tracking-tight">
                                        {project.title}
                                    </h3>

                                    {/* Bulleted Details */}
                                    <div className="space-y-8 mb-10">
                                        {/* Challenge */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h4 className="text-[10px] font-black text-[#3B5249] uppercase tracking-widest mb-3 opacity-40">The Challenge</h4>
                                            <ul className="space-y-2">
                                                {challengeBullets.map((bullet, i) => (
                                                    <li key={i} className="flex gap-3 text-[14px] text-[#3B5249]/70 leading-relaxed italic">
                                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#3B5249]/20 shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        {/* Solution */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <h4 className="text-[10px] font-black text-[#3B5249] uppercase tracking-widest mb-3 opacity-40">The Solution</h4>
                                            <ul className="space-y-2">
                                                {solutionBullets.map((bullet, i) => (
                                                    <li key={i} className="flex gap-3 text-[14px] text-[#3B5249]/90 font-medium leading-relaxed">
                                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#3B5249] shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        {/* Impact */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <h4 className="text-[10px] font-black text-[#3B5249] uppercase tracking-widest mb-3 opacity-40">The Impact</h4>
                                            <ul className="space-y-2">
                                                {impactBullets.map((bullet, i) => (
                                                    <li key={i} className="flex gap-3 text-[14px] text-[#3B5249]/80 font-bold leading-relaxed">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#3B5249]/5 flex items-center justify-center shrink-0">
                                                            <svg className="w-3 h-3 text-[#3B5249]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                        </div>
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    {/* Tech & Actions */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-[9px] font-black uppercase tracking-wider bg-[#3B5249]/5 text-[#3B5249]/60 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-[#3B5249] text-white px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:opacity-90 transition-all shadow-xl shadow-[#3B5249]/20">
                                                GitHub
                                            </a>
                                        )}
                                        {project.projectUrl && project.projectUrl !== "#" && (
                                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-[#3B5249] text-[#3B5249] px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#3B5249] hover:text-white transition-all">
                                                Case Study
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Pagination Cue */}
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 text-[#3B5249]/20">
                            {projects.map((_, pIdx) => (
                                <div
                                    key={pIdx}
                                    className={`w-1 transition-all duration-500 ${pIdx === idx ? 'h-12 bg-[#3B5249]' : 'h-4 bg-[#3B5249]/20'}`}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
