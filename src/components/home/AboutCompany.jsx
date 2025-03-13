import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCompany() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-tl-3xl opacity-20" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-br-3xl opacity-20" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1582517378602-f109b395ce40?q=80&w=2071&auto=format&fit=crop&q=80" 
                                alt="Ship construction" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent mix-blend-multiply" />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-blue-900">PT. Orionindo Jaya Ocean</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Kami adalah perusahaan terdepan dalam bidang jasa Cargo Marine Inquiry, Petroleum & Chemical Inspection, serta P&I Surveyor. Berdiri dengan komitmen untuk memberikan layanan inspeksi dan konsultasi yang profesional, kami melayani berbagai kebutuhan industri maritim dan energi dengan standar internasional.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Berbasis di Palembang, Indonesia, kami hadir untuk memastikan kelancaran serta keamanan dalam setiap aktivitas operasional klien kami. Dengan tim ahli yang berpengalaman dan peralatan modern, kami menjamin kualitas layanan terbaik untuk setiap proyek yang kami tangani.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-blue-600 font-bold text-3xl mb-2">15+</div>
                                <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-blue-600 font-bold text-3xl mb-2">500+</div>
                                <div className="text-gray-600 font-medium">Proyek Selesai</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                                <div className="text-blue-600 font-bold text-3xl mb-2">100%</div>
                                <div className="text-gray-600 font-medium">Kepuasan Klien</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}