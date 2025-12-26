"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/app/data/portfolio';

export default function ProjectGrid() {
    const { projects } = portfolioData;

    // State to track current image index for each project
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>(
        projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
    );

    const nextImage = (projectId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % totalImages
        }));
    };

    const prevImage = (projectId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: prev[projectId] === 0 ? totalImages - 1 : prev[projectId] - 1
        }));
    };

    const goToImage = (projectId: number, index: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: index
        }));
    };

    // Automatic Slideshow

    useEffect(() => {
        const interval = setInterval(() => {
            projects.forEach(project => {
                if (project.images.length > 1) {
                    nextImage(project.id, project.images.length);
                }
            });
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [projects]);

    return (
        <div className="px-4 md:px-8 py-2 max-w-7xl mx-auto space-y-6">
            {/* Page Header - Compact */}
            <div className="text-center mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-[#3B5249] mb-1">Featured Projects</h1>
                <p className="text-[#3B5249]/70 text-sm">Product Development, Operations Excellence and Data Analysis</p>
            </div>

            {/* Projects */}
            {projects.map((project) => {
                const currentIndex = currentImageIndex[project.id] || 0;

                return (
                    <div
                        key={project.id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D4C5A9]/30"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Left: Image Gallery - More Compact */}
                            <div className="relative bg-gradient-to-br from-[#3B5249] to-[#2D3E35] p-4 flex items-center justify-center min-h-[300px] lg:min-h-[350px]">
                                {/* Category Badge - Smaller */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-[#E8E1D5] text-[#3B5249] text-[10px] font-bold rounded-full shadow-md">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Image Carousel */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative w-full aspect-[16/10] max-w-sm">
                                        <Image
                                            src={project.images[currentIndex]}
                                            alt={`${project.title} - Image ${currentIndex + 1}`}
                                            fill
                                            className="object-contain rounded-lg drop-shadow-xl transition-all duration-700 ease-in-out"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Navigation Arrows - Smaller */}
                                    {project.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => prevImage(project.id, project.images.length)}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#3B5249] p-2 rounded-full shadow-md transition-all hover:scale-110 z-20"
                                                aria-label="Previous image"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => nextImage(project.id, project.images.length)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#3B5249] p-2 rounded-full shadow-md transition-all hover:scale-110 z-20"
                                                aria-label="Next image"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Dots Navigation - Closer */}
                                {project.images.length > 1 && (
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToImage(project.id, index)}
                                                className={`w-1.5 h-1.5 rounded-full transition-all ${currentIndex === index
                                                    ? 'bg-[#E8E1D5] w-5'
                                                    : 'bg-[#E8E1D5]/40 hover:bg-[#E8E1D5]/70'
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right: Content - Compact Padding */}
                            <div className="p-6 lg:p-7 flex flex-col justify-between">
                                {/* Title and Summary */}
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-[#3B5249] mb-2 group-hover:text-[#2D3E35] transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-[#3B5249]/80 text-[13px] leading-relaxed mb-4">
                                        {project.summary}
                                    </p>

                                    {/* Challenge-Solution-Impact - Grid Layout to save space */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                                        <div className="border-l-2 border-[#3B5249] pl-3">
                                            <h4 className="text-[10px] font-bold text-[#3B5249]/60 uppercase tracking-wider">Challenge</h4>
                                            <p className="text-[11px] text-[#3B5249]/90 mt-0.5">{project.challenge}</p>
                                        </div>
                                        <div className="border-l-2 border-[#3B5249] pl-3">
                                            <h4 className="text-[10px] font-bold text-[#3B5249]/60 uppercase tracking-wider">Solution</h4>
                                            <p className="text-[11px] text-[#3B5249]/90 mt-0.5">{project.solution}</p>
                                        </div>
                                        <div className="border-l-2 border-[#3B5249] pl-3">
                                            <h4 className="text-[10px] font-bold text-[#3B5249]/60 uppercase tracking-wider">Impact</h4>
                                            <p className="text-[11px] text-[#3B5249]/90 mt-0.5">{project.impact}</p>
                                        </div>
                                    </div>



                                    {/* Tech Stack - Inline and small */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 bg-[#3B5249]/5 text-[#3B5249] text-[10px] font-bold rounded border border-[#3B5249]/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons - Compact */}
                                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#D4C5A9]/20">
                                    {(project.projectUrl && project.projectUrl !== "#") && (
                                        <a
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#3B5249] text-[#E8E1D5] text-[11px] font-semibold rounded hover:bg-[#2D3E35] transition-all shadow-sm"
                                        >
                                            {project.projectUrl.endsWith('.pdf') ? 'View Report' : 'View Project'}
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-4 py-1.5 bg-transparent border border-[#3B5249] text-[#3B5249] text-[11px] font-semibold rounded hover:bg-[#3B5249] hover:text-[#E8E1D5] transition-all"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
