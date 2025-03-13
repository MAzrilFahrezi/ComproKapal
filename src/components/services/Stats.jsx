import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Stats() {
    const stats = [
        { number: "500+", label: "Proyek Selesai" },
        { number: "50+", label: "Partnership" },
        { number: "15+", label: "Tahun Pengalaman" },
        { number: "100%", label: "Kepuasan Klien" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Pencapaian Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Komitmen kami untuk memberikan layanan terbaik telah menghasilkan berbagai pencapaian yang membanggakan
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                {stat.number.includes('+') ? (
                                    <>
                                        <CountUp
                                            end={parseInt(stat.number)}
                                            duration={2.5}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                        +
                                    </>
                                ) : stat.number.includes('%') ? (
                                    <>
                                        <CountUp
                                            end={parseInt(stat.number)}
                                            duration={2.5}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                        %
                                    </>
                                ) : (
                                    <CountUp
                                        end={parseInt(stat.number)}
                                        duration={2.5}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                )}
                            </h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
