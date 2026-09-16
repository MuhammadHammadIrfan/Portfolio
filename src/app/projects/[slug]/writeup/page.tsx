import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getWriteupBySlug, researchWriteups } from '@/data/researchWriteups';
import { getProjectBySlug } from '@/data/projects';
import { 
    HiArrowLeft, 
    HiExternalLink, 
    HiAcademicCap, 
    HiDocumentText, 
    HiClipboardCopy, 
    HiShieldCheck, 
    HiChip, 
    HiDatabase,
    HiLightBulb
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Badge from '@/components/ui/Badge';
import CopyBibtexButton from './CopyBibtexButton';

export async function generateStaticParams() {
    return Object.keys(researchWriteups).map((slug) => ({
        slug: slug,
    }));
}

export default async function ResearchWriteupPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const writeup = getWriteupBySlug(slug);
    const project = getProjectBySlug(slug);

    if (!writeup) {
        notFound();
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Navigation Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <Link
                        href={`/projects/${slug}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                        <HiArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
                        Back to {project?.title || 'Project'}
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/projects"
                            className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                        >
                            All Projects
                        </Link>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800">
                            Research Write-Up
                        </span>
                    </div>
                </div>

                {/* Article Header Container */}
                <header className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-10 mb-10 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

                    <div className="relative">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                            <HiAcademicCap className="w-4 h-4" />
                            {writeup.category}
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4 leading-tight">
                            {writeup.title}
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 font-normal leading-relaxed">
                            {writeup.subtitle}
                        </p>

                        {/* Metadata Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-slate-200 dark:border-slate-700 text-sm">
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold mb-1">
                                    Author(s)
                                </span>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">
                                    {writeup.authors.join(', ')}
                                </p>
                            </div>

                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold mb-1">
                                    Academic / Industry Supervision
                                </span>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">
                                    {writeup.supervisors.join(', ')}
                                </p>
                            </div>

                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold mb-1">
                                    Institution & Collaborators
                                </span>
                                <p className="text-slate-700 dark:text-slate-300">
                                    {writeup.institutions.join(' • ')}
                                </p>
                                {writeup.collaboration && (
                                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                                        {writeup.collaboration}
                                    </p>
                                )}
                            </div>

                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold mb-1">
                                    Timeline & Funding
                                </span>
                                <p className="text-slate-700 dark:text-slate-300">
                                    {writeup.date}
                                </p>
                                {writeup.funding && (
                                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                                        {writeup.funding}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Quick Action Links */}
                        <div className="flex flex-wrap items-center gap-3 pt-6">
                            {writeup.githubUrl && (
                                <a
                                    href={writeup.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-sm"
                                >
                                    <FaGithub className="w-4 h-4 mr-2" />
                                    View Source Code
                                </a>
                            )}
                            <Link
                                href={`/projects/${slug}`}
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-sm"
                            >
                                <HiDocumentText className="w-4 h-4 mr-1.5" />
                                Interactive Demo & Screenshots
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Key Research Highlights Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {writeup.keyMetrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-5 shadow-md flex flex-col justify-between"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                {metric.label}
                            </span>
                            <div className="my-2">
                                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {metric.value}
                                </span>
                            </div>
                            <span className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                                {metric.description}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Abstract Section */}
                <section className="bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-slate-50 dark:from-slate-800/80 dark:via-purple-950/20 dark:to-slate-800/80 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-2xl p-6 sm:p-8 mb-10 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <HiLightBulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
                            Abstract & Executive Summary
                        </h2>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-serif">
                        {writeup.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                        {writeup.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Detailed Sections */}
                <div className="space-y-10">
                    {writeup.sections.map((section) => (
                        <article
                            key={section.id}
                            id={section.id}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg"
                        >
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                        {section.subtitle}
                                    </p>
                                )}
                                <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mt-3"></div>
                            </div>

                            {/* Section Content */}
                            <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 text-base whitespace-pre-line">
                                {section.content}
                            </div>

                            {/* Key Takeaways */}
                            {section.keyPoints && section.keyPoints.length > 0 && (
                                <div className="mt-6 bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                                        Key Insights & Methodology
                                    </h4>
                                    <ul className="space-y-2">
                                        {section.keyPoints.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Callout Box */}
                            {section.callout && (
                                <div className="mt-6 p-5 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-slate-800 dark:text-slate-200">
                                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                                        {section.callout.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed whitespace-pre-line">
                                        {section.callout.text}
                                    </p>
                                </div>
                            )}

                            {/* Responsive Table */}
                            {section.table && (
                                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-sm text-left">
                                        <thead className="bg-slate-100 dark:bg-slate-900/80 font-semibold text-slate-900 dark:text-slate-100">
                                            <tr>
                                                {section.table.headers.map((head, idx) => (
                                                    <th key={idx} scope="col" className="px-4 py-3.5 whitespace-nowrap">
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                                            {section.table.rows.map((row, rowIdx) => (
                                                <tr 
                                                    key={rowIdx}
                                                    className={rowIdx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''}
                                                >
                                                    {row.map((cell, cellIdx) => (
                                                        <td key={cellIdx} className="px-4 py-3 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* BibTeX Citation Box */}
                <section className="mt-10 bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <HiDocumentText className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-bold text-white">
                                Cite This Technical Report / Research
                            </h3>
                        </div>
                        <CopyBibtexButton bibtex={writeup.bibtex} />
                    </div>

                    <pre className="p-4 bg-slate-950/80 rounded-xl overflow-x-auto text-xs font-mono text-emerald-400 border border-slate-800 leading-relaxed">
                        <code>{writeup.bibtex}</code>
                    </pre>
                </section>

                {/* Footer Navigation */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md">
                    <Link
                        href={`/projects/${slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                        <HiArrowLeft className="w-4 h-4 mr-2" />
                        View Visual Overview & Media
                    </Link>

                    <Link
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-md"
                    >
                        Explore All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
