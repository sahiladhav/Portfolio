"use client";

import { useState, FormEvent } from 'react';
import { portfolioData } from '@/app/data/portfolio';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const { contact } = portfolioData;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: contact.web3formsKey,
                    from_name: `Portfolio: ${formData.name}`,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || "New Message from Portfolio",
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error('Submission failed:', result.message);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3B5249]/50 mb-2">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-[#3B5249]/10 focus:border-[#3B5249] outline-none transition-all text-[#3B5249] font-bold text-lg placeholder:text-[#3B5249]/20"
                        placeholder="Sahil Adhav"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3B5249]/50 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-[#3B5249]/10 focus:border-[#3B5249] outline-none transition-all text-[#3B5249] font-bold text-lg placeholder:text-[#3B5249]/20"
                        placeholder="sahil@example.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3B5249]/50 mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-[#3B5249]/10 focus:border-[#3B5249] outline-none transition-all text-[#3B5249] font-bold text-lg placeholder:text-[#3B5249]/20"
                    placeholder="Project Opportunity"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3B5249]/50 mb-2">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-[#3B5249]/10 focus:border-[#3B5249] outline-none transition-all text-[#3B5249] font-bold text-lg placeholder:text-[#3B5249]/20 resize-none"
                    placeholder="Tell me about your project..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 bg-[#3B5249] text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-[#2D3E35] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#3B5249]/20"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <p className="text-green-600 text-xs text-center font-black uppercase tracking-widest animate-pulse">
                    Message sent successfully!
                </p>
            )}

            {status === 'error' && (
                <p className="text-red-600 text-xs text-center font-black uppercase tracking-widest">
                    Oops! Something went wrong.
                </p>
            )}
        </form>
    );
}
