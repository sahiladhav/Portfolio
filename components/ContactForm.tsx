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
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
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
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all"
                    placeholder="Your Name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all"
                    placeholder="Project Inquiry"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all resize-none"
                    placeholder="How can I help you?"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-[var(--accent-color)] text-white text-sm font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
                <p className="text-green-600 text-xs text-center font-medium animate-fade-in">
                    Message sent successfully! I'll get back to you soon.
                </p>
            )}

            {status === 'error' && (
                <p className="text-red-600 text-xs text-center font-medium animate-fade-in">
                    Oops! Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}
