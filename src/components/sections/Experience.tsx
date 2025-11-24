"use client";

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { HiCheckCircle, HiBriefcase } from 'react-icons/hi';

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative mb-12 pl-20"
                            >
                                {/* Timeline Dot with Icon */}
                                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                    <HiBriefcase className="w-8 h-8 text-white" />
                                </div>

                                {/* Experience Card */}
                                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                {exp.period}
                                            </span>
                                            {exp.current && (
                                                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="h-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 my-4"></div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <HiCheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
