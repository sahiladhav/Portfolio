"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolio';

export default function Interests() {
    const interests = (portfolioData as any).interests;

    return (
        <div className="space-y-16">
            {/* Introductory Text */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[#3B5249]/60 font-medium max-w-2xl text-sm md:text-base"
            >
                Outside of my professional pursuits, I find perspective and energy through these passions. Whether it's the strategic depth of sports or the cinematic brilliance of a well-told story, these are the things that help me wind down and stay inspired.
            </motion.p>

            {/* Sports Section */}
            <div>
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-sm font-bold text-[#3B5249]/40 mb-8 uppercase tracking-[0.2em]"
                >
                    Sports i follow
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {interests.sports.map((sport: any, idx: number) => (
                        <motion.div
                            key={sport.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-[#3B5249]/5 shadow-md"
                        >
                            <Image
                                src={sport.image}
                                alt={sport.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3B5249]/80 via-[#3B5249]/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                                <div className="text-xl md:text-2xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                    {sport.icon}
                                </div>
                                <h4 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.15em] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {sport.name}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Media Section */}
            <div>
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-sm font-bold text-[#3B5249]/40 mb-8 uppercase tracking-[0.2em]"
                >
                    Cinema & Series
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {interests.media.map((item: any, idx: number) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer bg-[#3B5249]/5 shadow-md"
                        >
                            <div className="absolute inset-0 bg-[#3B5249]/10 flex flex-col justify-center items-center p-4 text-center">
                                <div className="text-[8px] font-bold text-[#3B5249]/40 uppercase tracking-widest mb-1">{item.type}</div>
                                <div className="text-[10px] font-black text-[#3B5249]/60 uppercase tracking-tighter leading-tight">{item.title}</div>
                            </div>

                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                                />
                            )}

                            {/* Info Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#3B5249] to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h5 className="text-white text-[10px] font-bold uppercase tracking-tight">{item.title}</h5>
                                <p className="text-white/60 text-[8px] uppercase font-medium">{item.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
