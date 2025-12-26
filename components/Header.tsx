import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#E8E1D5]/95 backdrop-blur-md border-b border-[#D4C5A9] p-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-300">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#3B5249] hover:text-[#A8B5A0] transition-colors">
                Sahil Adhav
            </Link>
            <nav className="flex items-center gap-8">
                <ul className="flex gap-6 text-sm font-medium text-[#3B5249]/70 uppercase tracking-widest items-center">
                    <li><Link href="/" className="hover:text-[#A8B5A0] transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-[#A8B5A0] transition-colors">About Me</Link></li>
                    <li><Link href="/skills" className="hover:text-[#A8B5A0] transition-colors">Skills</Link></li>
                    <li><Link href="/projects" className="hover:text-[#A8B5A0] transition-colors">Projects</Link></li>
                    <li><Link href="/contact" className="hover:text-[#A8B5A0] transition-colors">Contact Me</Link></li>
                </ul>
                <a
                    href="/Resume_of_Sahil_Adhav.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block px-4 py-2 bg-[var(--accent-color)] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity"
                >
                    View Resume
                </a>
            </nav>
        </header>
    );
}