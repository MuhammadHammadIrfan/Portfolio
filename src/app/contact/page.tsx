"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and replace these with your actual IDs
const EMAILJS_SERVICE_ID = 'service_s3sd8ri'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_j1ntgsz'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'u7PN_Rrpxje7Wgq_t'; // Replace with your EmailJS public key

export default function ContactPage() {
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
        // Reset status when user starts typing again
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
        }
    };

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
                        Contact Me
                    </h1>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <h2 className="text-2xl font-bold text-foreground mb-6">
                                    Send a Message
                                </h2>
                                
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
                                
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    {/* Hidden field for recipient email */}
                                    <input type="hidden" name="to_email" value="muhammadhammadirfan1@gmail.com" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="from_name"
                                                value={formData.from_name}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground disabled:opacity-50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="from_email"
                                                value={formData.from_email}
                                                onChange={handleChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground disabled:opacity-50"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground disabled:opacity-50"
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            rows={6}
                                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none disabled:opacity-50"
                                            placeholder="Tell me about your project or inquiry..."
                                        />
                                    </div>
                                    <Button 
                                        type="submit" 
                                        variant="primary" 
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <Card>
                                <h2 className="text-xl font-bold text-foreground mb-4">
                                    Get in Touch
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaEnvelope className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                                            <a
                                                href="mailto:muhammadhammadirfan1@gmail.com"
                                                className="text-foreground hover:text-primary transition-colors"
                                            >
                                                muhammadhammadirfan1@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Location</p>
                                            <p className="text-foreground">Islamabad, Pakistan</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <h2 className="text-xl font-bold text-foreground mb-4">
                                    Social Links
                                </h2>
                                <div className="space-y-3">
                                    <a
                                        href="https://github.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        <FaLinkedin className="w-5 h-5" />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </Card>

                            <Card>
                                <h2 className="text-xl font-bold text-foreground mb-2">
                                    Availability
                                </h2>
                                <p className="text-foreground/80 text-sm">
                                    I'm currently open to freelance projects and full-time opportunities.
                                    Let's discuss how we can work together!
                                </p>
                            </Card>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
