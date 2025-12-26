import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { portfolioData } from '@/app/data/portfolio';

export default function Contact() {
    const { contact } = portfolioData;

    // Get social links by platform for easy access
    const getLink = (platform: string) => contact.socialLinks.find(l => l.platform === platform)?.url || '#';

    return (
        <main className="min-h-screen flex flex-col animate-fade-in bg-[#E8E1D5]">
            <Header />
            <section className="flex-grow w-full px-6 md:px-8 py-6 max-w-6xl mx-auto flex flex-col justify-center">
                <div className="mb-6">
                    <h2 className="text-xs font-medium text-[#3B5249]/60 uppercase tracking-widest mb-2">Get in Touch</h2>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3B5249]">Let's Work Together</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Contact Form */}
                    <div className="w-full">
                        <ContactForm />
                    </div>

                    {/* Right Column: Socials Panel */}
                    <div className="space-y-4">
                        <p className="text-[#3B5249]/70 text-sm leading-relaxed">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            {/* Email */}
                            <a href={`mailto:${contact.email}`} className="group p-4 rounded-xl border border-[#D4C5A9] bg-white hover:border-[#3B5249] hover:shadow-[0_0_15px_rgba(59,82,73,0.15)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-2">
                                <div className="p-2 bg-[#A8B5A0]/20 text-[#3B5249] rounded-full group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xs">Email</h3>
                                    <p className="text-xs text-gray-500 mt-1 truncate">{contact.email}</p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a href={getLink('LinkedIn')} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl border border-gray-100 bg-white hover:border-[#0077B5] hover:shadow-[0_0_15px_rgba(0,119,181,0.1)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-2">
                                <div className="p-2 bg-blue-50 text-[#0077B5] rounded-full group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xs">LinkedIn</h3>
                                    <p className="text-xs text-gray-500 mt-1">Connect</p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a href={getLink('GitHub')} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl border border-gray-100 bg-white hover:border-[#333] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-2">
                                <div className="p-2 bg-gray-50 text-[#333] rounded-full group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 4.803 3.117 8.856 7.443 10.293.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xs">GitHub</h3>
                                    <p className="text-xs text-gray-500 mt-1">Projects</p>
                                </div>
                            </a>

                            {/* X (formerly Twitter) */}
                            <a href={getLink('X')} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl border border-gray-100 bg-white hover:border-[#000] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-2">
                                <div className="p-2 bg-gray-50 text-[#000] rounded-full group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-xs">X</h3>
                                    <p className="text-xs text-gray-500 mt-1">Follow</p>
                                </div>
                            </a>
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
