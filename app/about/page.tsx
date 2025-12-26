import Header from '@/components/Header';
import { portfolioData } from '@/app/data/portfolio';
import GrowthTree from '@/components/GrowthTree';

export default function About() {
    return (
        <main className="min-h-screen flex flex-col animate-fade-in bg-[#E8E1D5]">
            <Header />
            <section className="flex-grow w-full px-8 md:px-12 py-12 max-w-6xl mx-auto">
                {/* Summary Section */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">About Me</h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-500 max-w-2xl mx-auto">
                        {portfolioData.about.bio}
                    </p>
                </div>

                {/* Timeline Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        My Journey
                    </h2>
                </div>

                {/* Vertical Timeline */}
                <GrowthTree />

            </section>

            <footer className="p-8 mt-12 text-xs text-gray-400 text-center">
                &copy; {new Date().getFullYear()} Sahil Adhav. All rights reserved.
            </footer>
        </main>
    );
}
