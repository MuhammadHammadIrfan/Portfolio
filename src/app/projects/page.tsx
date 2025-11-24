"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Badge from '@/components/ui/Badge';
import { HiArrowRight } from 'react-icons/hi';

const categories = ['AI + Full Stack', 'Web Development', 'Other CS Projects'];

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
                        All Projects
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        Explore my portfolio of AI-powered applications, full-stack web projects, and innovative solutions
                    </p>

                    {categories.map((category) => {
                        const categoryProjects = projects.filter(p => p.category === category);

                        if (categoryProjects.length === 0) return null;

                        return (
                            <div key={category} className="mb-16">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                    {category}
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {categoryProjects.map((project, index) => (
                                        <motion.div
                                            key={project.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Link href={`/projects/${project.slug}`}>
                                                <div className="group h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:-translate-y-1">
                                                    {/* Project Image */}
                                                    <div className="relative h-48 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                                        <Image
                                                            src={project.images[0]}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    </div>

                                                    {/* Project Content */}
                                                    <div className="p-6">
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                                            {project.shortDescription}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2 mb-4">
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
                                                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                                                            View Details
                                                            <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
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
