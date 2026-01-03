"use client";

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-[#3B5249]">
                    SAHIL ADHAV
                </Link>

                <div className="flex items-center gap-6 md:gap-10">
                    <a href="#about" className="text-sm font-semibold uppercase tracking-widest text-[#3B5249]/70 hover:text-[#3B5249] transition-colors">
                        About
                    </a>
                    <a href="#projects" className="text-sm font-semibold uppercase tracking-widest text-[#3B5249]/70 hover:text-[#3B5249] transition-colors">
                        Projects
                    </a>
                    <a href="#skills" className="text-sm font-semibold uppercase tracking-widest text-[#3B5249]/70 hover:text-[#3B5249] transition-colors">
                        Skills
                    </a>
                    <a href="#contact" className="text-sm font-semibold uppercase tracking-widest text-[#3B5249]/70 hover:text-[#3B5249] transition-colors">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}