import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const OurTeam = () => {
    const { translate } = useLanguage();

    const teamMembers = [
        {
            name: translate('team.member1.name'),
            position: translate('team.member1.position'),
            image: "/src/assets/soekarno.jpeg"
        },
        {
            name: translate('team.member2.name'),
            position: translate('team.member2.position'),
            image: "/src/assets/soekarno.jpeg"
        },
        {
            name: translate('team.member3.name'),
            position: translate('team.member3.position'),
            image: "/src/assets/soekarno.jpeg"
        },
        {
            name: translate('team.member4.name'),
            position: translate('team.member4.position'),
            image: "/src/assets/soekarno.jpeg"
        },
    ];
    return (
        <section className="py-16 bg-white relative">
            {/* Background Geometry */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 1440 320">
                    <path fill="#f3f4f6" fillOpacity="0.5" d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,144C600,139,660,149,720,160C780,171,840,181,900,186.7C960,192,1020,192,1080,186.7C1140,181,1200,171,1260,160C1320,149,1380,139,1410,134.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
                </svg>
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-48 h-24 bg-green-200 rounded-lg opacity-30"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">{translate('team.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.position}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
                    {teamMembers.slice(4).map((member, index) => (
                        <motion.div 
                            key={index + 4} // Menyesuaikan index untuk anggota tim tambahan
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
                        >
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.position}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Menambahkan bagian Kolaborasi yang Kuat */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-10 mb-16 border border-blue-50 mt-12"
                >
                    <div className="flex flex-col items-center mb-8">
                        <div className="p-4 bg-blue-50 rounded-full mb-4">
                            <FaHandshake className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                            {translate('team.collaboration.title')}
                        </h3>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-center max-w-3xl">
                            {translate('team.collaboration.description')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurTeam;
