"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import { HiArrowRight, HiAcademicCap, HiDocumentText } from 'react-icons/hi';

const categories = [
    'Research Projects',
    'AI-Powered Applications',
    'Production Full-Stack Systems',
    'Web & PWA Products',
    'Academic & Experimental Projects'
];

export default function ProjectsPage() {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                        All Projects & Research
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        Explore my portfolio of published research, clinical AI systems, autonomous multi-agent co-pilots, and production web applications.
                    </p>

                    {categories.map((category) => {
                        const categoryProjects = projects.filter(p => p.category === category);

                        if (categoryProjects.length === 0) return null;

                        const isResearch = category === 'Research Projects';

                        return (
                            <div key={category} className="mb-16">
                                <div className="flex items-center gap-3 mb-2">
                                    {isResearch && (
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                                            <HiAcademicCap className="w-5 h-5" />
                                        </div>
                                    )}
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                                        {category}
                                    </h2>
                                </div>
                                <div className={`h-1 w-24 ${isResearch ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} mb-6`}></div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {categoryProjects.map((project, index) => (
                                        <motion.div
                                            key={project.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <div className="group h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
                                                {/* Project Image Link */}
                                                <Link href={`/projects/${project.slug}`} className="block relative h-52 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                                    <Image
                                                        src={project.images[0]}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                    {project.hasWriteup && (
                                                        <div className="absolute top-3 right-3 px-3 py-1 bg-purple-600/90 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5 border border-purple-400/30">
                                                            <HiDocumentText className="w-3.5 h-3.5" />
                                                            Write-Up Available
                                                        </div>
                                                    )}
                                                </Link>

                                                {/* Project Content */}
                                                <div className="p-6 flex flex-col flex-1 justify-between">
                                                    <div>
                                                        <Link href={`/projects/${project.slug}`}>
                                                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                                                {project.title}
                                                            </h3>
                                                        </Link>
                                                        
                                                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                                                            {project.shortDescription}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className="flex flex-wrap gap-2 mb-5">
                                                            {project.techStack.slice(0, 4).map((tech) => (
                                                                <Badge key={tech} variant="secondary">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                            {project.techStack.length > 4 && (
                                                                <Badge variant="secondary">
                                                                    +{project.techStack.length - 4}
                                                                </Badge>
                                                            )}
                                                        </div>

                                                        {/* Action Buttons */}
                                                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/60">
                                                            <Link
                                                                href={`/projects/${project.slug}`}
                                                                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                                                            >
                                                                View Case Study
                                                                <HiArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                                            </Link>

                                                            {project.hasWriteup && (
                                                                <Link
                                                                    href={`/projects/${project.slug}/writeup`}
                                                                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-xs font-semibold border border-purple-200 dark:border-purple-800 transition-all hover:scale-105"
                                                                >
                                                                    <HiAcademicCap className="w-4 h-4 mr-1 text-purple-600 dark:text-purple-400" />
                                                                    Read Write-Up
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
