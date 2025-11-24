"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface CarouselProps {
    images: string[];
    alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold) {
            goToPrevious();
        } else if (info.offset.x < -swipeThreshold) {
            goToNext();
        }
    };

    // Check if current item is a video
    const isVideo = (url: string) => {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
    };

    if (images.length === 0) {
        return (
            <div className="w-full h-96 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                <p className="text-slate-600 dark:text-slate-400">No media available</p>
            </div>
        );
    }

    const currentItem = images[currentIndex];
    const isCurrentVideo = isVideo(currentItem);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full">
            {/* Main Media Container */}
            <div className="relative w-full h-96 md:h-[500px] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={handleDragEnd}
                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    >
                        {isCurrentVideo ? (
                            <video
                                src={currentItem}
                                controls
                                className="w-full h-full object-contain"
                                preload="metadata"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={currentItem}
                                alt={`${alt} - Image ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                priority={currentIndex === 0}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Now with better visibility */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-110 z-10"
                            aria-label="Previous image"
                        >
                            <HiChevronLeft className="w-6 h-6 text-slate-900 dark:text-slate-100" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-110 z-10"
                            aria-label="Next image"
                        >
                            <HiChevronRight className="w-6 h-6 text-slate-900 dark:text-slate-100" />
                        </button>
                    </>
                )}

                {/* Media Counter */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 text-white text-sm font-medium z-10">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Video/Image Indicator */}
                {isCurrentVideo && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium z-10">
                        📹 Video
                    </div>
                )}
            </div>

            {/* Dots Indicator - Outside the image */}
            {images.length > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-6">
                    {images.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'bg-blue-600 w-8 h-2'
                                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 w-2 h-2'
                                }`}
                            aria-label={`Go to ${isVideo(item) ? 'video' : 'image'} ${index + 1}`}
                            title={isVideo(item) ? `Video ${index + 1}` : `Image ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Swipe Hint (only on touch devices) */}
            {images.length > 1 && (
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 md:hidden">
                    👆 Swipe to navigate
                </p>
            )}
        </div>
    );
}
