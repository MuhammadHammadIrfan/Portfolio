"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
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
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
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
                                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
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
                                            rows={6}
                                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                                            placeholder="Tell me about your project or inquiry..."
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full">
                                        Send Message
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
                                                href="mailto:your.email@example.com"
                                                className="text-foreground hover:text-primary transition-colors"
                                            >
                                                your.email@example.com
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
