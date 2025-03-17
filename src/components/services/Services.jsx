import React from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaClipboardCheck, FaUserTie, FaRocket, FaGlobeAmericas, FaTools, FaShieldAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import Stats from './Stats';
import Process from './Process';
import Advantages from './Advantages';
import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
    const { translate } = useLanguage();

    const services = [
        {
            icon: <FaShip className="w-8 h-8" />,
            title: translate('services2.services.0.title'),
            description: translate('services2.services.0.description'),
            features: [
                translate('services2.services.0.features.0'),
                translate('services2.services.0.features.1'),
                translate('services2.services.0.features.2'),
                translate('services2.services.0.features.3'),
                translate('services2.services.0.features.4'),
                translate('services2.services.0.features.5'),
                translate('services2.services.0.features.6'),
                translate('services2.services.0.features.7')
            ],
            image: 'https://www.tuv.com/content-media-files/government-inspections-international-trade/tuev-rheinland-government-inspections-international-trade-marine-st-1393552976_core_8_3.jpg',
            bgGradient: 'from-blue-600 to-blue-800'
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8" />,
            title: translate('services2.services.1.title'),
            description: translate('services2.services.1.description'),
            features: [
                translate('services2.services.1.features.0'),
                translate('services2.services.1.features.1'),
                translate('services2.services.1.features.2'),
                translate('services2.services.1.features.3'),
                translate('services2.services.1.features.4'),
                translate('services2.services.1.features.5'),
                translate('services2.services.1.features.6'),
                translate('services2.services.1.features.7')
            ],
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/DC/AM/FR/4155215/cargo-survey-services.jpg',
            bgGradient: 'from-indigo-600 to-indigo-800'
        },
    ];

    const stats = [
        { number: "500+", label: translate('services2.stats.projects') },
        { number: "50+", label: translate('services2.stats.partnership') },
        { number: "15+", label: translate('services2.stats.experience') },
        { number: "100%", label: translate('services2.stats.satisfaction') }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Animated Background */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            {translate('services2.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            {translate('services2.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {translate('services2.header')}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {translate('services2.subheader')}
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Card Header with Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                        <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-gray-200 text-lg">{service.description}</p>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-8">
                                    <div className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-start space-x-4 group"
                                            >
                                                <div className={`flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r ${service.bgGradient}`}></div>
                                                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                    {feature}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}