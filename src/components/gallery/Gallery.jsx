import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function Gallery() {
    const { translate } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);

    // Mengambil data gambar dari terjemahan
    const images = translate('galeri.galleryImages');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[40vh] bg-blue-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1520931061294-db3e762a9273?q=80&w=2070&auto=format&fit=crop"
                        alt="Gallery Hero"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-900"></div>
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {translate('galeri.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {translate('galeri.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images && images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="relative w-full pt-[75%]">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <span className="text-sm text-blue-300 font-medium">
                                                {image.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mt-2">
                                                {image.title}
                                            </h3>
                                            <p className="text-gray-300 mt-2">
                                                {image.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-lg">
                                <span className="text-sm text-blue-300 font-medium">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mt-2">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-gray-300 mt-2">
                                    {selectedImage.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}