import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import Link from 'next/link';
import { HiArrowLeft, HiExternalLink, HiAcademicCap, HiDocumentText, HiArrowRight } from 'react-icons/hi';
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
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                        <HiArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>

                    {project.category === 'Research Projects' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full border border-purple-200 dark:border-purple-800">
                            <HiAcademicCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            Research Project
                        </span>
                    )}
                </div>

                {/* Project Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        {project.title}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {project.shortDescription}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        {project.hasWriteup && (
                            <Link
                                href={`/projects/${project.slug}/writeup`}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg font-medium group hover:scale-[1.02]"
                            >
                                <HiAcademicCap className="w-5 h-5 mr-2 text-yellow-300 group-hover:rotate-12 transition-transform" />
                                Read Research Write-Up
                            </Link>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-lg font-medium"
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
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg font-medium"
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

                {/* Research Write-Up Callout Banner */}
                {project.hasWriteup && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                                <HiDocumentText className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                    Comprehensive Technical Write-Up Available
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Explore the peer-reviewed methodology, system architecture diagrams, benchmark comparisons, and academic citations.
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/projects/${project.slug}/writeup`}
                            className="inline-flex items-center whitespace-nowrap px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md group hover:scale-[1.02]"
                        >
                            Read Write-Up
                            <HiArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                )}

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
                        Project & Documentation Links
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                    <div className="space-y-4">
                        {project.hasWriteup && (
                            <div className="flex items-center gap-3">
                                <HiAcademicCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <Link
                                    href={`/projects/${project.slug}/writeup`}
                                    className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                                >
                                    Technical Research Write-Up & Citation Details →
                                </Link>
                            </div>
                        )}
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
                        {!project.githubUrl && !project.liveUrl && !project.hasWriteup && (
                            <p className="text-slate-600 dark:text-slate-400">Links will be added soon.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
