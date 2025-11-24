"use client";

import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

const education = [
    {
        institution: 'National University of Sciences and Technology (NUST)',
        degree: 'Bachelor of Science in Computer Science',
        period: 'Sep 2023 - Present',
        location: 'Islamabad, Pakistan',
    },
    {
        institution: 'Aspire College',
        degree: 'Intermediate in Pre-Engineering',
        period: 'Completed',
        grade: '87.5%',
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-800">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.institution}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-400/50"
                            >
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <HiAcademicCap className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                            {edu.degree}
                                        </p>
                                        <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
                                            <span>{edu.period}</span>
                                            {edu.location && <span className="hidden sm:inline">• {edu.location}</span>}
                                            {edu.grade && (
                                                <span className="px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 dark:text-green-400 rounded-md font-medium">
                                                    {edu.grade}
                                                </span>
                                            )}
                                        </div>
                                        {edu.location && <p className="sm:hidden text-sm text-slate-600 dark:text-slate-400 mt-1">{edu.location}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
