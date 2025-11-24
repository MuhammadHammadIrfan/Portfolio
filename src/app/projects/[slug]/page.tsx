import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import Link from 'next/link';
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Badge from '@/components/ui/Badge';
import Carousel from '@/components/ui/Carousel';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/projects"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
                >
                    <HiArrowLeft className="w-5 h-5 mr-2" />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        {project.title}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                        {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-lg"
                            >
                                <FaGithub className="w-5 h-5 mr-2" />
                                View on GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                            >
                                <HiExternalLink className="w-5 h-5 mr-2" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Carousel */}
                <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
                    <Carousel images={project.images} alt={project.title} />
                </div>

                {/* Project Overview */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Project Overview
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.longDescription}
                    </p>
                </div>

                {/* Problem It Solves */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Problem It Solves
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                    </p>
                </div>

                {/* Tools & Technologies */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Tools & Technologies Used
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"></div>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="primary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Skills Involved */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Skills Involved
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 mb-4"></div>
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Challenges
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 mb-4"></div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {project.challenges}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Learnings
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {project.learnings}
                        </p>
                    </div>
                </div>

                {/* Links */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        Links
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                    <div className="space-y-3">
                        {project.githubUrl && (
                            <div className="flex items-center gap-3">
                                <FaGithub className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                                >
                                    {project.githubUrl}
                                </a>
                            </div>
                        )}
                        {project.liveUrl && (
                            <div className="flex items-center gap-3">
                                <HiExternalLink className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                                >
                                    {project.liveUrl}
                                </a>
                            </div>
                        )}
                        {!project.githubUrl && !project.liveUrl && (
                            <p className="text-slate-600 dark:text-slate-400">Links will be added soon.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
