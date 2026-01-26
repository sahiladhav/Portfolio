"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { portfolioData } from '@/app/data/portfolio';
import GrowthTree from '@/components/GrowthTree';
import ProjectGrid from '@/components/ProjectGrid';
import ContactForm from '@/components/ContactForm';
import Interests from '@/components/Interests';

// Skills Category color mapping - Earthy tones
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Processes': { bg: 'bg-[#A8B5A0]/20', text: 'text-[#3B5249]', border: 'border-[#A8B5A0]' },
  'Programming': { bg: 'bg-[#D4C5A9]/30', text: 'text-[#3B5249]', border: 'border-[#D4C5A9]' },
  'Database': { bg: 'bg-[#A8B5A0]/30', text: 'text-[#3B5249]', border: 'border-[#A8B5A0]' },
  'Tools': { bg: 'bg-[#D4C5A9]/20', text: 'text-[#3B5249]', border: 'border-[#D4C5A9]' }
};

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Project Manager",
    "Supply Chain Analyst",
    "Operations Manager",
    "Product Manager"
  ];
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
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleIndex, displayedText, isDeleting, roles]);

  const { contact } = portfolioData;

  return (
    <main className="bg-[#E8E1D5] min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden snap-start">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-6 md:px-12 py-12">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#3B5249] shadow-2xl bg-white/10 group">
                <Image
                  src={portfolioData.profileImage}
                  alt="Sahil Adhav"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            <div className="space-y-2">
              <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-[#3B5249] leading-tight tracking-tight">
                Sahil Adhav
              </h1>
              <div className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-[#3B5249]/80 font-medium">
                Aspiring <span className="font-bold text-[#3B5249]">{displayedText}</span>
                <span className="w-1 h-6 bg-[#3B5249] inline-block ml-1 animate-pulse" />
              </div>
            </div>

            <p className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-[#3B5249]/70 max-w-2xl leading-relaxed">
              Passionate about supply chain optimization and operations. Seeking{" "}
              <span className="font-bold text-[#3B5249]">Summer 2026 Internships</span> to drive impact through data-driven decision making.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-[#3B5249] text-white font-bold rounded-lg hover:bg-[#2D3E35] transition-all shadow-lg text-[14px]"
              >
                View My Work
              </a>
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#4A6359] text-white font-bold rounded-lg hover:bg-[#3B5249] transition-all shadow-lg text-[14px]"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-[#3B5249] text-[#3B5249] font-bold rounded-lg hover:bg-[#3B5249]/5 transition-all text-[14px]"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-container bg-[#3B5249] text-[#E8E1D5] snap-start min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <h2 className="text-display mb-6">MY JOURNEY</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl opacity-80">
              {portfolioData.about.bio}
            </p>
          </motion.div>

          <GrowthTree />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <div id="projects" className="bg-[#E8E1D5]">
        <div className="max-w-7xl mx-auto w-full px-6 pt-24 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-display text-[#3B5249]"
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#3B5249]/60 text-sm md:text-base mt-2"
          >
            Product Development, Operations Excellence and Data Analysis
          </motion.p>
        </div>

        <ProjectGrid />
      </div>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-container bg-white/40 backdrop-blur-sm snap-start min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-display text-[#3B5249] mb-4">TECHNICAL TOOLKIT</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.skills.map((section, idx) => {
              const colors = categoryColors[section.category] || categoryColors['Tools'];
              return (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-[#E8E1D5]/20 border border-[#D4C5A9]/30 rounded-2xl hover:border-[#3B5249]/30 transition-colors group"
                >
                  <h3 className="text-xl font-bold text-[#3B5249] mb-6 uppercase tracking-widest">
                    {section.category}
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                    {section.items.map((skill) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      const skillIcon = typeof skill !== 'string' ? skill.icon : null;

                      return (
                        <div
                          key={skillName}
                          className="flex items-center gap-3 py-1 group/skill transition-all duration-300 hover:translate-x-1 cursor-default"
                        >
                          {skillIcon && (
                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                              <img
                                src={skillIcon.startsWith('/') ? skillIcon : `https://cdn.simpleicons.org/${skillIcon}`}
                                alt=""
                                className="w-full h-full object-contain opacity-90 group-hover/skill:opacity-100 transition-opacity"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement!.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          <span className="text-xs md:text-sm font-medium text-[#3B5249]/80 group-hover/skill:text-[#3B5249] leading-tight">
                            {skillName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERESTS SECTION */}
      <section id="interests" className="section-container snap-start min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-display text-[#3B5249] mb-4">BEYOND THE WORKSPACE</h2>
          </motion.div>

          <Interests />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-container bg-[#D4C5A9]/50 snap-start min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-display text-[#3B5249] mb-8"
              >
                LET'S CONNECT
              </motion.h2>
              <p className="text-lg text-[#3B5249]/70 mb-12 max-w-md">
                Interested in collaboration or have a question? Leave a message below or reach out via social channels.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-[#3B5249] hover:translate-x-2 transition-transform group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#3B5249] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-black tracking-widest opacity-40">Email</p>
                    <p className="font-bold">{contact.email}</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-6">
                  {contact.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#3B5249] hover:bg-[#3B5249] hover:text-white transition-all hover:-translate-y-1"
                      aria-label={link.platform}
                    >
                      {link.platform === 'LinkedIn' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                      {link.platform === 'GitHub' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                      {link.platform === 'X' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" /></svg>}
                      {link.platform === 'Resume' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#3B5249]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B5249]/5 rounded-bl-full -mr-16 -mt-16" />
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#3B5249] text-[#E8E1D5]/40 text-center border-t border-[#E8E1D5]/5">
        <p className="text-xs uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} Sahil Adhav & bull; Built with Next.js & Framer Motion
        </p>
      </footer>
    </main>
  );
}