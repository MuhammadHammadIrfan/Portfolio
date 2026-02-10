"use client";

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { HiCheckCircle, HiBriefcase, HiCalendar, HiOfficeBuilding, HiSparkles } from 'react-icons/hi';

export default function ExperiencePage() {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg"
                        >
                            <HiBriefcase className="w-8 h-8 text-white" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Work Experience
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            My professional journey in software development and AI integration
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'} pl-20 md:pl-0`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 z-10`}>
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                                        exp.current 
                                            ? 'bg-gradient-to-br from-green-400 to-emerald-600' 
                                            : 'bg-gradient-to-br from-blue-500 to-purple-600'
                                    }`}>
                                        <HiBriefcase className="w-7 h-7 text-white" />
                                    </div>
                                    {exp.current && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                                            <HiSparkles className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 group">
                                        {/* Header */}
                                        <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                                            {exp.current && (
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full mb-3">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                                    Currently Working
                                                </span>
                                            )}
                                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {exp.title}
                                            </h2>
                                            <div className={`flex flex-wrap items-center gap-3 mt-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                                                <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                                                    <HiOfficeBuilding className="w-4 h-4" />
                                                    {exp.company}
                                                </span>
                                            </div>
                                            <div className={`flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                                                <HiCalendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent my-5"></div>

                                        {/* Achievements */}
                                        <ul className="space-y-3">
                                            {exp.description.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                                    className="flex items-start gap-3 text-left"
                                                >
                                                    <div className="mt-1 flex-shrink-0">
                                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                                            <HiCheckCircle className="w-4 h-4 text-white" />
                                                        </div>
                                                    </div>
                                                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                            Interested in working together?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            I'm always open to discussing new opportunities and exciting projects.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                        >
                            Get In Touch
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
