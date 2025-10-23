import React from 'react';
import { FaHandshake, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Partners() {
    const { translate } = useLanguage();

    const partners = [
        {
            name: 'PT. Hijau Lestari Raya Fiberboard',
            logo: '/assets/Pt hijau lestari raya.jpeg.jpg',
            type: 'Fiberboard Industry'
        },
        {
            name: 'PT. Indonesia Fibreboard Industry Tbk.',
            logo: '/assets/ifi.png',
            type: 'Fiberboard Manufacturing'
        },
        {
            name: 'PT. Wahana Lestari Makmur Sukses',
            logo: '/assets/PT Wahana Lestari Makmur.png',
            type: 'Logistics'
        },
        {
            name: 'PT. Samudera Indonesia Group',
            logo: '/assets/PT Samudera Indonesia.png',
            type: 'Shipping & Logistics'
        },
        {
            name: 'PT. Silkargo Indonesia',
            logo: '/assets/PT Samudera Indonesia.png',
            type: 'Cargo Services'
        },
        {
            name: 'PT. Tri Elang Jaya Maritim',
            logo: '/assets/trielang.png',
            type: 'Maritime Services'
        },
        {
            name: 'CV Syafer',
            logo: '/assets/syafer.png',
            type: 'Manufacturing & Export'
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
                        {translate('home.partners.title')}
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
                        {translate('home.partners.description')}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center h-48 border border-gray-100 group"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="text-center">
                                    <h3 className="text-sm font-semibold text-gray-900">{partner.name}</h3>
                                    <span className="text-xs text-blue-600 mt-1">{partner.type}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

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
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">{translate('home.partners.collaboration.title')}</h3>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-center max-w-3xl">
                            {translate('home.partners.collaboration.description')}
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
                                <h3 className="text-xl font-bold">{translate('home.partners.commitments.security.title')}</h3>
                            </div>
                            <p className="text-blue-100 leading-relaxed">
                                {translate('home.partners.commitments.security.description')}
                            </p>
                            <div className="mt-6 h-1 w-16 bg-white/40 rounded-full"></div>
                        </div>
                        <div className="text-white">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/10 rounded-lg mr-4">
                                    <FaLeaf className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold">{translate('home.partners.commitments.environmental.title')}</h3>
                            </div>
                            <p className="text-blue-100 leading-relaxed">
                                {translate('home.partners.commitments.environmental.description')}
                            </p>
                            <div className="mt-6 h-1 w-16 bg-white/40 rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}