"use client";

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_s3sd8ri';
const EMAILJS_TEMPLATE_ID = 'template_j1ntgsz';
const EMAILJS_PUBLIC_KEY = 'u7PN_Rrpxje7Wgq_t';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            
            setSubmitStatus('success');
            setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900/50">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto px-4">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-lg"
                        >
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400">
                                    Failed to send message. Please try again or email me directly.
                                </div>
                            )}
                            
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="to_email" value="muhammadhammadirfan1@gmail.com" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-slate-100 disabled:opacity-50"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="from_email"
                                            value={formData.from_email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-slate-100 disabled:opacity-50"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-slate-100 disabled:opacity-50"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-slate-900 dark:text-slate-100 disabled:opacity-50"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-400/50">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <HiMail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Email</h3>
                                        <a href="mailto:muhammadhammadirfan1@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline break-all text-sm sm:text-base">
                                            muhammadhammadirfan1@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-400/50">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <HiLocationMarker className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Location</h3>
                                        <p className="text-slate-600 dark:text-slate-400">Islamabad, Pakistan</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-400/50">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Connect With Me</h3>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://github.com/MuhammadHammadIrfan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub className="w-6 h-6 text-white" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/muhammad-hammad-irfan-a25375285/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin className="w-6 h-6 text-white" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-500/50 dark:hover:border-green-400/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Availability</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    I'm currently open to freelance projects and full-time opportunities.
                                    Let's discuss how we can work together!
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
