import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-visible">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-visible opacity-30  pointer-events-none" style={{ zIndex: 1 }}>
                <svg className="absolute top-0 left-0 w-96 h-96 text-blue-600 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 200 200">
                    <path d="M44.3,-76.4C58.8,-69.8,72.9,-59.6,79.1,-45.4C85.2,-31.2,83.5,-13.1,79.8,3.7C76.1,20.4,70.4,35.8,61,48.3C51.6,60.8,38.5,70.4,24.2,75.2C10,80,-5.4,79.8,-20.9,76.7C-36.5,73.5,-52.3,67.2,-65.3,56.4C-78.4,45.6,-88.7,30.2,-89.9,14.1C-91,-2,-83,-17.7,-73.7,-30.9C-64.4,-44.1,-53.8,-54.7,-41.3,-61.9C-28.9,-69,-14.4,-72.7,0.7,-73.9C15.9,-75.1,31.8,-74,44.3,-76.4Z" transform="translate(100 100)" />
                </svg>
                <svg className="absolute bottom-0 right-0 w-96 h-96 text-blue-600 transform translate-x-1/3 translate-y-1/3" fill="currentColor" viewBox="0 0 200 200">
                    <path d="M39.5,-66.2C52.9,-60.1,66.8,-52.7,75.2,-40.5C83.5,-28.3,86.4,-11.3,83.6,4.3C80.7,19.9,72.3,34.2,61.5,45.8C50.8,57.4,37.9,66.4,23.5,72.1C9.1,77.9,-6.7,80.3,-21.8,77.2C-36.8,74,-51.1,65.2,-60.9,53.3C-70.8,41.4,-76.2,26.4,-79.3,10.8C-82.5,-4.8,-83.5,-21,-77.6,-34.4C-71.8,-47.7,-59.2,-58.3,-45.3,-64.3C-31.5,-70.4,-15.7,-71.9,-0.6,-71C14.6,-70.2,29.1,-66.9,39.5,-66.2Z" transform="translate(100 100)" />
                </svg>
            </div>

            {/* Additional floating elements for depth */}
            <div className="absolute top-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-100/30 blur-lg" style={{ zIndex: 2 }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-100/30 blur-lg" style={{ zIndex: 2 }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Mengapa Memilih Kami
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"
                    />
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Dengan pengalaman bertahun-tahun dalam industri maritim, kami menawarkan solusi komprehensif
                        yang memenuhi standar internasional dan kebutuhan spesifik klien kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12" style={{ zIndex: 20 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-50 p-4 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Keamanan & Keselamatan</h3>
                        <p className="text-gray-600 text-center">
                            Kami memprioritaskan keselamatan dalam setiap aspek layanan kami, memastikan setiap inspeksi dan proyek memenuhi standar keamanan tertinggi.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-10 transform md:translate-y-8"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-t-2xl"></div>
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-50 p-4 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Efisiensi & Kecepatan</h3>
                        <p className="text-gray-600 text-center">
                            Dengan teknologi terkini dan tim yang berpengalaman, kami memberikan layanan yang cepat dan efisien tanpa mengorbankan kualitas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-2xl"></div>
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-50 p-4 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Inovasi & Teknologi</h3>
                        <p className="text-gray-600 text-center">
                            Kami selalu berinvestasi dalam teknologi terbaru dan metode inovatif untuk memberikan solusi perkapalan yang mutakhir.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-visible shadow-xl relative z-20">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Siap untuk solusi maritim profesional?</h3>
                            <p className="text-blue-100 mb-8">
                                Kami siap membantu Anda dengan berbagai kebutuhan maritim dan inspeksi. Hubungi kami sekarang untuk konsultasi gratis.
                            </p>
                            <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                                Hubungi Kami
                            </a>
                        </div>
                        <div className="hidden md:block relative h-full overflow-hidden">
                            <img
                                src="public\gambar1.jpg"
                                alt="Maritime operations"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-800/90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
