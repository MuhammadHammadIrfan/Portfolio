"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiDownload, HiViewGrid, HiEye } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function Hero() {
    const fullText = 'Full Stack Developer | Next.js | React | Node.js | Supabase | AI Integration';
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Smooth character-by-character typing effect
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(prev => prev + 1);
            }, 50); // 50ms per character for smooth typing
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            Muhammad Hammad Irfan
                        </h1>
                    </motion.div>

                    <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6 min-h-[2em]">
                        {displayedText}
                        {currentIndex < fullText.length && <span className="animate-pulse">|</span>}
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                        Passionate full-stack developer specializing in building AI-powered and data-driven applications.
                        Experienced in end-to-end development from architecture to deployment.
                    </p>

                    {/* CTA Buttons with Gradients */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-700"></div>
                            <div className="relative flex items-center text-white">
                                <HiViewGrid className="w-5 h-5 mr-2" />
                                View Projects
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://drive.google.com/file/d/1HEArVMsQbaJnvdoMa2pFO4XuVPLyiPQd/preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center overflow-hidden border-2 border-blue-500 dark:border-blue-400"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center text-blue-600 dark:text-blue-400">
                                <HiEye className="w-5 h-5 mr-2" />
                                View Resume
                            </div>
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400"
                        >
                            <div className="relative flex items-center text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                <HiDownload className="w-5 h-5 mr-2" />
                                Download Resume
                            </div>
                        </motion.a>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex justify-center items-center space-x-6"
                    >
                        <a
                            href="https://github.com/MuhammadHammadIrfan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-hammad-irfan-a25375285"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:muhammadhammadirfan1@gmail.com"
                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                            aria-label="Email"
                        >
                            <FaEnvelope className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
