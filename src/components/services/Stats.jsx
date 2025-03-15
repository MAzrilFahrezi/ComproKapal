import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

export default function Stats() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>

                    <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <FaTrophy className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Pencapaian Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                        Komitmen kami untuk memberikan layanan terbaik telah menghasilkan berbagai pencapaian yang membanggakan.
                        Dengan pengalaman lebih dari 15 tahun dalam industri maritim, kami telah dipercaya oleh berbagai perusahaan
                        terkemuka di Indonesia.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
