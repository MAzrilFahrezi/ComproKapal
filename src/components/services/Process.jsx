import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
    const processes = [
        {
            title: "Konsultasi Awal",
            description: "Diskusi mendalam tentang kebutuhan dan spesifikasi proyek Anda",
            icon: "🤝"
        },
        {
            title: "Perencanaan",
            description: "Penyusunan rencana detail dan timeline proyek",
            icon: "📋"
        },
        {
            title: "Eksekusi",
            description: "Pelaksanaan proyek dengan standar kualitas tinggi",
            icon: "⚙️"
        },
        {
            title: "Quality Control",
            description: "Pemeriksaan menyeluruh untuk memastikan hasil terbaik",
            icon: "✓"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Proses Kerja Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                        Pendekatan sistematis kami memastikan setiap proyek berjalan efisien dan memberikan hasil terbaik
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div className="text-4xl mb-4">{process.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                                <p className="text-blue-100">{process.description}</p>
                            </div>
                            {index < processes.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-blue-400/20">
                                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
