import Header from '@/components/Header';
import ProjectGrid from '@/components/ProjectGrid';

export default function Projects() {
    return (
        <main className="min-h-screen flex flex-col animate-fade-in bg-[#E8E1D5]">
            <Header />

            <section className="flex-grow">
                <ProjectGrid />
            </section>

            <footer className="p-8 mt-12 text-xs text-gray-400 text-center">
                &copy; {new Date().getFullYear()} Sahil Adhav. All rights reserved.
            </footer>
        </main>
    );
}
