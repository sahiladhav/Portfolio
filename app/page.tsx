"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import { portfolioData } from '@/app/data/portfolio';

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.targetedRoles;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return; // Return early to avoid setting timeout for typing speed
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleIndex, displayedText, isDeleting, roles]);

  return (
    <main className="h-screen flex flex-col animate-fade-in bg-[#E8E1D5] overflow-hidden">
      <Header />

      <section className="flex-grow flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">

          {/* Left Column - Picture (2 columns on desktop) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-[#3B5249] bg-white/50 shadow-xl flex items-center justify-center overflow-hidden relative">
              <Image
                src={portfolioData.profileImage}
                alt="Sahil Adhav Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content (3 columns on desktop) */}
          <div className="md:col-span-3 text-center md:text-left space-y-5">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#3B5249]">
              Sahil Adhav
            </h1>

            <p className="text-xl md:text-2xl font-light text-[#3B5249]/90 leading-relaxed min-h-[2.5rem] md:min-h-[3rem]">
              Aspiring <span className="text-[#2D3E35] font-medium">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-base md:text-lg text-[#3B5249]/80 leading-relaxed">
              Passionate about supply chain optimization and operations. Seeking <span className="font-semibold text-[#3B5249] whitespace-nowrap">Summer 2026 Internships</span> to drive impact through data-driven decision making.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
              <Link
                href="/projects"
                className="px-8 py-3 bg-[#3B5249] text-[#E8E1D5] font-semibold rounded-lg hover:bg-[#2D3E35] transition-all duration-300 text-center"
              >
                View My Work
              </Link>
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#3B5249] text-[#E8E1D5] font-semibold rounded-lg hover:bg-[#2D3E35] transition-all duration-300 text-center"
              >
                View Resume
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-[#3B5249] text-[#3B5249] font-semibold rounded-lg hover:bg-[#3B5249] hover:text-[#E8E1D5] transition-all duration-300 text-center"
              >
                Let's Connect
              </Link>
            </div>
          </div>

        </div>
      </section>

      <footer className="p-8 mt-12 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Sahil Adhav. All rights reserved.
      </footer>
    </main>
  );
}