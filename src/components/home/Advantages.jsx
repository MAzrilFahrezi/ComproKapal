import React from 'react';
import { FaUserTie, FaClipboardCheck, FaRocket, FaGlobeAmericas, FaTools, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Advantages() {
    const advantages = [
        {
            icon: <FaUserTie className="w-8 h-8 " />,
            title: "Profesional & Berpengalaman",
            description: "Tim kami terdiri dari para ahli dengan pengalaman bertahun-tahun dalam industri maritim dan energi."
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8 " />,
            title: "Akurasi & Kepatuhan",
            description: "Setiap inspeksi dilakukan dengan standar tertinggi, mengikuti regulasi nasional dan internasional."
        },
        {
            icon: <FaRocket className="w-8 h-8 " />,
            title: "Pelayanan Cepat & Efisien",
            description: "Kami memahami pentingnya waktu dalam bisnis Anda dan berkomitmen memberikan hasil yang cepat dan akurat."
        },
        {
            icon: <FaGlobeAmericas className="w-8 h-8 " />,
            title: "Jaringan Luas",
            description: "Dengan koneksi yang kuat di industri, kami siap memberikan layanan terbaik di berbagai lokasi."
        },
        {
            icon: <FaTools className="w-8 h-8 " />,
            title: "Teknologi Modern",
            description: "Menggunakan peralatan dan teknologi terkini untuk memastikan hasil inspeksi yang akurat dan efisien."
        },
        {
            icon: <FaShieldAlt className="w-8 h-8 " />,
            title: "Jaminan Kualitas",
            description: "Memberikan jaminan kualitas terbaik untuk setiap layanan yang kami berikan dengan standar internasional."
        }
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-white via-white to-blue-50 overflow-hidden">
            {/* Wave decorations */}
            <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute w-full text-blue-50">
                    <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Decorative circles */}
            <div className="absolute inset-0">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40 blur-2xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Kami</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-8"></div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        Dengan pengalaman dan keahlian yang kami miliki, kami menawarkan berbagai keunggulan 
                        untuk memenuhi kebutuhan bisnis maritim Anda dengan standar internasional.
                    </motion.p>
                </div>
                
                {/* Advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Card background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mt-10 -mr-10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transform group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                    <div className="text-white transform group-hover:-rotate-6 transition-transform duration-300">
                                        {advantage.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {advantage.description}
                                </p>
                            </div>
                            
                            {/* Bottom border decoration */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full text-blue-50 transform rotate-180">
                    <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}