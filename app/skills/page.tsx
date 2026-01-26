"use client";
import Header from '@/components/Header';
import { portfolioData } from '@/app/data/portfolio';

// Category color mapping - Earthy tones
const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    'Processes': { bg: 'bg-[#A8B5A0]/20', text: 'text-[#3B5249]', border: 'border-[#A8B5A0]', glow: 'hover:shadow-[0_0_15px_rgba(168,181,160,0.2)]' },
    'Programming': { bg: 'bg-[#D4C5A9]/30', text: 'text-[#3B5249]', border: 'border-[#D4C5A9]', glow: 'hover:shadow-[0_0_15px_rgba(212,197,169,0.2)]' },
    'Database': { bg: 'bg-[#A8B5A0]/30', text: 'text-[#3B5249]', border: 'border-[#A8B5A0]', glow: 'hover:shadow-[0_0_15px_rgba(168,181,160,0.2)]' },
    'Tools': { bg: 'bg-[#D4C5A9]/20', text: 'text-[#3B5249]', border: 'border-[#D4C5A9]', glow: 'hover:shadow-[0_0_15px_rgba(212,197,169,0.2)]' }
};

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <main className="min-h-screen flex flex-col animate-fade-in bg-[#E8E1D5]">
            <Header />
            <section className="px-6 md:px-8 py-6 max-w-7xl mx-auto flex-grow w-full flex flex-col">
                {/* Page Header */}
                <div className="text-center mb-6">
                    <h2 className="text-xs font-medium text-[#3B5249]/60 uppercase tracking-widest mb-2">My Toolkit</h2>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3B5249]">Technical & Operational Skills</h1>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                    {skills.map((section) => {
                        const colors = categoryColors[section.category] || categoryColors['Tools'];
                        return (
                            <div
                                key={section.category}
                                className="group p-5 bg-white rounded-xl border border-[#D4C5A9] hover:border-[#3B5249] transition-all duration-300"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-2 h-2 rounded-full ${colors.bg} border ${colors.border}`} />
                                    <h3 className="text-lg font-bold text-[#3B5249]">{section.category}</h3>
                                    <div className="ml-auto">
                                        <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-bold rounded-full`}>
                                            {section.items.length}
                                        </span>
                                    </div>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                                    {section.items.map((skill) => {
                                        const skillName = typeof skill === 'string' ? skill : skill.name;
                                        const skillIcon = typeof skill !== 'string' ? skill.icon : null;

                                        return (
                                            <div
                                                key={skillName}
                                                className="flex items-center gap-4 py-1.5 transition-all duration-300 hover:translate-x-2 cursor-default group/skill"
                                            >
                                                {skillIcon && (
                                                    <div className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 flex items-center justify-center">
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
                                                <span className="text-xs md:text-base font-semibold text-[#3B5249]/80 group-hover/skill:text-[#3B5249] leading-tight">
                                                    {skillName}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <footer className="p-8 mt-12 text-xs text-gray-400 text-center">
                &copy; {new Date().getFullYear()} Sahil Adhav. All rights reserved.
            </footer>
        </main>
    );
}
