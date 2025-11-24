"use client";

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { HiCheckCircle, HiBriefcase } from 'react-icons/hi';
import Card from '@/components/ui/Card';

export default function ExperiencePage() {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
                        Work Experience
                    </h1>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        My professional journey in software development and AI integration
                    </p>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <HiBriefcase className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                                <div>
                                                    <h2 className="text-2xl font-bold text-foreground">
                                                        {exp.title}
                                                    </h2>
                                                    <p className="text-lg text-primary font-medium">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 mt-2 md:mt-0">
                                                    <span className="text-sm text-muted-foreground">
                                                        {exp.period}
                                                    </span>
                                                    {exp.current && (
                                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-border my-4"></div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <HiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-foreground/90">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
