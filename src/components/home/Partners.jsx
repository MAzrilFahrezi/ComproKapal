import React from 'react';
import { FaHandshake, FaShieldAlt, FaLeaf, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Partners() {
    const partners = [
        {
            name: 'Pertamina',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg',
            type: 'Oil & Gas'
        },
        {
            name: 'Pelindo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Baru_Pelindo_%282021%29.png?20211002211259',
            type: 'Port Services'
        },
        {
            name: 'PTBA',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/%28Bukit_Asam%29_Logo_CMYK-01.png',
            type: 'Mining & Resources'
        },
        {
            name: 'Vale Indonesia',
            logo: 'https://vale.com/documents/d/guest/vale-logo',
            type: 'Mining & Resources'
        },
        {
            name: 'Sinar Mas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sinarmas-Logo.png/1200px-Sinarmas-Logo.png?20190219075517',
            type: 'Conglomerate'
        },
        {
            name: 'Medco Energi',
            logo: 'https://cdn.brandfetch.io/idxNQ8kPtO/w/325/h/221/theme/light/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
            type: 'Energy'
        }
    ];

    const testimonials = [
        {
            name: 'Budi Santoso',
            role: 'Operations Director',
            company: 'PT Pertamina Shipping',
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop',
            quote: 'Orionindo telah menjadi mitra yang sangat dapat diandalkan dalam inspeksi dan survei kapal kami. Profesionalisme dan keahlian mereka sangat luar biasa.'
        },
        {
            name: 'Linda Wijaya',
            role: 'Technical Manager',
            company: 'Pelindo Marine Services',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop',
            quote: 'Kami sangat terkesan dengan standar tinggi dan ketepatan waktu dalam setiap proyek yang ditangani oleh tim Orionindo.'
        }
    ];
    
    return (
        <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 right-20 w-60 h-60 bg-blue-100 rounded-full opacity-40"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Klien & Mitra Kami
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        PT. Orionindo Jaya Ocean telah bekerja sama dengan berbagai perusahaan terkemuka di sektor maritim, minyak, dan kimia. 
                        Kepercayaan yang diberikan oleh klien kami menjadi bukti komitmen kami dalam memberikan layanan terbaik dan profesional.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
                >
                    {partners.map((partner, index) => (
                        <motion.div 
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center h-32 border border-gray-100 group"
                        >
                            <div className="flex flex-col items-center space-y-3">
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-gray-600 text-sm font-medium">{partner.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Apa Kata Mereka</h3>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                            >
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 rounded-full p-4 shadow-lg">
                                    <FaQuoteRight className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-blue-600">{testimonial.role}</p>
                                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-10 mb-16 border border-blue-50"
                >
                    <div className="flex flex-col items-center mb-8">
                        <div className="p-4 bg-blue-50 rounded-full mb-4">
                            <FaHandshake className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Kolaborasi yang Kuat</h3>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-center max-w-3xl">
                            Kami bangga telah menjalin kemitraan dengan berbagai perusahaan terkemuka dalam industri maritim dan energi. 
                            Setiap kerjasama kami dibangun atas dasar kepercayaan, profesionalisme, dan komitmen untuk memberikan layanan terbaik.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-10 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-blue-700 opacity-20 rounded-full"></div>
                    
                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                        <div className="text-white">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/10 rounded-lg mr-4">
                                    <FaShieldAlt className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold">Komitmen Keamanan</h3>
                            </div>
                            <p className="text-blue-100 leading-relaxed">
                                Sebagai perusahaan yang bergerak di sektor maritim dan energi, kami berkomitmen untuk menjaga keamanan kerja 
                                serta mematuhi regulasi keselamatan internasional dalam setiap aspek operasional kami.
                            </p>
                            <div className="mt-6 h-1 w-16 bg-white/40 rounded-full"></div>
                        </div>
                        <div className="text-white">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/10 rounded-lg mr-4">
                                    <FaLeaf className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold">Komitmen Lingkungan</h3>
                            </div>
                            <p className="text-blue-100 leading-relaxed">
                                Kami menerapkan prosedur yang ramah lingkungan dan berkomitmen untuk menjaga kelestarian lingkungan 
                                dalam setiap aktivitas operasional perusahaan.
                            </p>
                            <div className="mt-6 h-1 w-16 bg-white/40 rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}