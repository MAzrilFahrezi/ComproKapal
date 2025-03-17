import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Cover = () => {
    const { translate } = useLanguage();

    return (
        <section className="relative mb-16">
            <img 
                src="https://img.freepik.com/premium-photo/cargo-ship-ocean-with-containers_951562-15636.jpg" 
                alt={translate('about.cover.title')} 
                className="w-full h-72 object-cover rounded-none"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 bg-black bg-opacity-50">
                <motion.h2 
                    className="text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {translate('about.cover.title')}
                </motion.h2>
                <motion.p 
                    className="text-lg text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {translate('about.cover.subtitle')}
                </motion.p>
            </div>
        </section>
    );
};

export default Cover;
