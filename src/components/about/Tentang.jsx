import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
    const { translate } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:">
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-900 mb-4"
                >
                    {translate('about.about.title')}
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {translate('about.about.description')}
                </p>
            </div>
        </div>
    );
};

export default About;
