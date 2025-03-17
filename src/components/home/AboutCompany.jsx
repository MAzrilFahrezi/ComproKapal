import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutCompany() {
    const { translate } = useLanguage();

    return (
        <section className="py-20 overflow-visible relative">
            <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
                <div className="absolute top-20 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-70 blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-50 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute top-40 left-20 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
                <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-100 rounded-full opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        {translate('home.about.title')}
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
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-tl-3xl opacity-20" style={{ zIndex: 1 }} />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-br-3xl opacity-20" style={{ zIndex: 1 }} />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ zIndex: 2 }}>
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
                        className="space-y-6 relative" 
                        style={{ zIndex: 10 }}
                    >
                        <h3 className="text-2xl font-bold text-blue-900">{translate('home.about.companyName')}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {translate('home.about.description1')}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {translate('home.about.description2')}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <motion.div 
                                whileInView={{ scale: [0.9, 1.05, 1] }} 
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-blue-600 font-bold text-3xl mb-2">
                                    <CountUp start={0} end={15} duration={2.5} suffix="+" />
                                </div>
                                <div className="text-gray-600 font-medium">{translate('home.about.stats.experience')}</div>
                            </motion.div>
                            <motion.div 
                                whileInView={{ scale: [0.9, 1.05, 1] }} 
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-blue-600 font-bold text-3xl mb-2">
                                    <CountUp start={0} end={500} duration={2.5} suffix="+" />
                                </div>
                                <div className="text-gray-600 font-medium">{translate('home.about.stats.projects')}</div>
                            </motion.div>
                            <motion.div 
                                whileInView={{ scale: [0.9, 1.05, 1] }} 
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-blue-600 font-bold text-3xl mb-2">
                                    <CountUp start={0} end={100} duration={2.5} suffix="%" />
                                </div>
                                <div className="text-gray-600 font-medium">{translate('home.about.stats.satisfaction')}</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}