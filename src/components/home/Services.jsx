import React from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaClipboardCheck } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaShip className="w-12 h-12 text-white" />,
            title: "Survei Kapal",
            description: "Memberikan solusi yang memastikan klaim dibayar, kerusakan diperbaiki, kapal kembali beroperasi, dan meminimalkan risiko.",
            mainPoints: [
                "Survei Draft",
                "Survei Kondisi On/Off Hire untuk Semua Jenis Kapal",
                "Survei Kondisi Kerusakan Kapal untuk Klaim Asuransi",
                "Inspeksi Pra-Charter dan Pra-Pembelian Kapal",
                "Inspeksi Kondisi Umum Lambung dan Mesin",
                "Survei Bunker",
                "Survei Towing dan Lashing",
                "Investigasi Perlindungan dan Hal-hal Terkait Club Indemnity"
            ],
            bgColor: "from-blue-600 to-blue-800",
            hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900"
        },
        {
            icon: <FaClipboardCheck className="w-12 h-12 text-white" />,
            title: "Survei Kargo",
            description: "Memfasilitasi pelaksanaan transaksi yang cepat dan efisien, meningkatkan keamanan dan keandalan, serta mencegah gangguan jadwal pengiriman.",
            mainPoints: [
                "Survei/inspeksi bongkar muat",
                "Survei pra-pengiriman",
                "Survei pra-pembongkaran",
                "Pengawasan penataan, pengamanan, dan pengikatan kargo",
                "Survei kondisi kargo dan pengawasan kargo",
                "Penentuan kuantitas melalui sounding, penimbangan, tally, dan survei draft",
                "Survei kontainer, minyak, dan bahan kimia",
                "Pengambilan sampel kargo untuk analisis dan penentuan kualitas"
            ],

            bgColor: "from-indigo-600 to-indigo-800",
            hoverColor: "group-hover:from-indigo-700 group-hover:to-indigo-900"
        }
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-800 overflow-visible">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Layanan Kami
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        Kami menyediakan layanan profesional dalam industri maritim dengan
                        standar internasional dan komitmen untuk kualitas terbaik
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${service.bgColor} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl`}>
                                {/* Decorative circle */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                                <div className="relative p-8">
                                    {/* Header */}
                                    <div className="flex items-center space-x-6 mb-8">
                                        <div className="p-3 bg-white/10 rounded-xl">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Main Points */}
                                    <div className="space-y-4 mb-8">
                                        {service.mainPoints.map((point, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-white"></div>
                                                <p className="text-blue-50 leading-relaxed">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>



                                    {/* Bottom gradient line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}