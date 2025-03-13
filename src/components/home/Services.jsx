import React from 'react';
import { FaShip, FaOilCan, FaClipboardCheck, FaAnchor, FaWrench, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        {
            icon: <FaShip className="w-10 h-10 text-white" />,
            title: "Cargo Marine Inquiry",
            mainPoints: [
                "Verifikasi dan pemeriksaan kargo maritim untuk memastikan kualitas dan kuantitas sesuai dengan standar.",
                "Pengawasan pemuatan dan pembongkaran kargo."
            ],
            additionalPoints: [
                "Dokumentasi dan pelaporan detail",
                "Koordinasi dengan pihak pelabuhan"
            ],
            bgColor: "from-blue-600 to-blue-800"
        },
        {
            icon: <FaOilCan className="w-10 h-10 text-white" />,
            title: "Petroleum & Chemical Inspection",
            mainPoints: [
                "Analisis dan inspeksi produk minyak serta bahan kimia untuk menjamin kepatuhan terhadap spesifikasi industri.",
                "Sertifikasi kualitas produk sebelum pengiriman."
            ],
            additionalPoints: [
                "Pengujian laboratorium komprehensif",
                "Pemantauan kualitas berkelanjutan"
            ],
            bgColor: "from-indigo-600 to-indigo-800"
        },
        {
            icon: <FaClipboardCheck className="w-10 h-10 text-white" />,
            title: "P&I Surveyor",
            mainPoints: [
                "Pemeriksaan dan investigasi klaim asuransi maritim.",
                "Penilaian kerusakan kapal dan kargo."
            ],
            additionalPoints: [
                "Analisis penyebab kerusakan",
                "Rekomendasi pencegahan"
            ],
            bgColor: "from-cyan-600 to-cyan-800"
        },
        {
            icon: <FaAnchor className="w-10 h-10 text-white" />,
            title: "Marine Survey & Inspection",
            mainPoints: [
                "Inspeksi kondisi kapal secara menyeluruh.",
                "Pemeriksaan kelaikan kapal sesuai standar internasional."
            ],
            additionalPoints: [
                "Evaluasi sistem keselamatan",
                "Sertifikasi kelayakan"
            ],
            bgColor: "from-blue-700 to-blue-900"
        },
        {
            icon: <FaWrench className="w-10 h-10 text-white" />,
            title: "Technical Consulting",
            mainPoints: [
                "Konsultasi teknis untuk operasional kapal.",
                "Optimasi kinerja dan efisiensi sistem."
            ],
            additionalPoints: [
                "Audit teknis berkala",
                "Rekomendasi peningkatan"
            ],
            bgColor: "from-indigo-700 to-indigo-900"
        },
        {
            icon: <FaChartLine className="w-10 h-10 text-white" />,
            title: "Quality Management",
            mainPoints: [
                "Implementasi sistem manajemen mutu.",
                "Audit dan sertifikasi standar ISO."
            ],
            additionalPoints: [
                "Pelatihan personel",
                "Pengembangan SOP"
            ],
            bgColor: "from-cyan-700 to-cyan-900"
        }
    ];

    return (
        <section className="relative py-24 bg-blue-900 overflow-visible">
            {/* Wave background with proper z-index */}
            <div className="absolute left-0 top-0 w-full" style={{ zIndex: 1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white" style={{ marginTop: -1 }}>
                    <path fill="currentColor" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,218.7C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            
            {/* Floating circles decoration with proper z-index */}
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse" style={{ zIndex: 2 }}></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-600 opacity-20 animate-pulse" style={{ zIndex: 2 }}></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Layanan Kami
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-white mx-auto rounded-full mb-8"
                    />
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-lg max-w-3xl mx-auto p-6 bg-blue-900/80 rounded-lg shadow-lg"
                    >
                        <p className="text-white leading-relaxed drop-shadow-md">
                            <span className="font-medium text-yellow-300">Kami menyediakan berbagai layanan profesional</span>{" "}
                            <span className="text-blue-200">dalam industri maritim dengan</span>{" "}
                            <span className="font-medium text-yellow-300">standar internasional</span>{" "}
                            <span className="text-blue-200">dan komitmen untuk kualitas terbaik.</span>
                        </p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl shadow-2xl group"
                        >
                            <div className={`bg-gradient-to-br ${service.bgColor} p-8 h-full`}>
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                                
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-full bg-white/10 mr-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                <div className="space-y-4 text-blue-50">
                                    {service.mainPoints.map((point, idx) => (
                                        <p key={idx} className="leading-relaxed">
                                            {point}
                                        </p>
                                    ))}
                                </div>
                                
                                <ul className="mt-6 space-y-2">
                                    {service.additionalPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-center text-blue-100 text-sm">
                                            <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-30"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Bottom wave with proper z-index */}
            <div className="absolute left-0 bottom-0 w-full" style={{ zIndex: 1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white" style={{ marginBottom: -1 }}>
                    <path fill="currentColor" fillOpacity="1" d="M0,96L80,90.7C160,85,320,75,480,101.3C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}