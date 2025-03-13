import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:">
            {/* Sesi Mengapa Memilih Kami */}
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-900 mb-4"
                >
                    Tentang Kami
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Kami adalah perusahaan terdepan dalam bidang jasa Cargo Marine Inquiry, Petroleum & Chemical Inspection, serta P&I Surveyor. Berdiri dengan komitmen untuk memberikan layanan inspeksi dan konsultasi yang profesional, kami melayani berbagai kebutuhan industri maritim dan energi dengan standar internasional.
                </p>
            </div>
        </div>
    );
};

export default About;
