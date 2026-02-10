"use client";

import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiLightningBolt, HiChip } from 'react-icons/hi';

const expertiseAreas = [
    {
        icon: HiCode,
        title: 'Full-Stack Development',
        description: 'Building production-grade web applications with React, Next.js, Node.js, and Express',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: HiDatabase,
        title: 'Backend Architecture & Databases',
        description: 'Designing reliable data models, APIs, and workflows using PostgreSQL, Supabase, MongoDB, and MySQL',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: HiChip,
        title: 'AI & Automation',
        description: 'Integrating LLMs, LangChain, AI agents, and workflow automation into real-world systems',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: HiLightningBolt,
        title: 'Adaptability & Problem Solving',
        description: 'Quickly mastering new technologies and designing solutions for complex challenges',
        gradient: 'from-green-500 to-emerald-500',
    },
];


export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-8 shadow-lg">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
                            I’m a full-stack developer with a strong backend focus, experienced in building AI-powered and data-driven applications. I enjoy tackling real-world problems by combining databases, APIs, and AI models into reliable systems. From designing scalable architectures to delivering production-ready solutions, I thrive in fast-paced, collaborative environments and continuously adapt to new technologies to create meaningful impact.
                        </p>
                    </div>

                    {/* Expertise Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertiseAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Gradient background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>

                                    {/* Icon with gradient border */}
                                    <div className={`relative w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${area.gradient} p-0.5`}>
                                        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                    </div>

                                    <h3 className="relative text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                                        {area.title}
                                    </h3>
                                    <p className="relative text-sm text-slate-600 dark:text-slate-400">
                                        {area.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
