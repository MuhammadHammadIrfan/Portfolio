import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { href: 'https://github.com/MuhammadHammadIrfan', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/muhammad-hammad-irfan-a25375285/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:muhammadhammadirfan1@gmail.com', icon: FaEnvelope, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        © {new Date().getFullYear()} Muhammad Hammad Irfan. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                                    aria-label={link.label}
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
