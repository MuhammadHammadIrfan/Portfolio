"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProjects } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import { HiArrowRight, HiAcademicCap, HiDocumentText } from 'react-icons/hi';

export default function Projects() {
    const featuredProjects = getFeaturedProjects();

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                        Featured Research & Engineering Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        A selection of recent peer-level research, AI security engines, clinical decision support systems, and production platforms.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="group h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
                                    {/* Project Image */}
                                    <Link href={`/projects/${project.slug}`} className="block relative h-48 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            loading="lazy"
                                            quality={85}
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {project.category === 'Research Projects' && (
                                            <div className="absolute top-3 left-3 px-2.5 py-1 bg-purple-900/80 backdrop-blur-md text-purple-200 text-xs font-semibold rounded-full shadow border border-purple-500/30 flex items-center gap-1">
                                                <HiAcademicCap className="w-3.5 h-3.5" />
                                                Research
                                            </div>
                                        )}
                                    </Link>

                                    {/* Project Content */}
                                    <div className="p-6 flex flex-col flex-1 justify-between">
                                        <div>
                                            <div className="flex items-start justify-between mb-2">
                                                <Link href={`/projects/${project.slug}`}>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </Link>
                                            </div>
                                            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                                                {project.category}
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                                                {project.shortDescription}
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.techStack.slice(0, 3).map((tech) => (
                                                    <Badge key={tech} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <Badge variant="secondary">
                                                        +{project.techStack.length - 3}
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/60">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all group/link"
                                                >
                                                    View Details
                                                    <HiArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                                </Link>

                                                {project.hasWriteup && (
                                                    <Link
                                                        href={`/projects/${project.slug}/writeup`}
                                                        className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200 dark:border-purple-800 transition-colors"
                                                    >
                                                        <HiDocumentText className="w-3.5 h-3.5 mr-1 text-purple-600 dark:text-purple-400" />
                                                        Write-Up
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                View All Projects & Research
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
