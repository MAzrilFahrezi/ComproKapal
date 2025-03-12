import React from 'react';
import { FaUserTie, FaClipboardCheck, FaRocket, FaGlobeAmericas, FaTools, FaShieldAlt } from 'react-icons/fa';

export default function Advantages() {
    const advantages = [
        {
            icon: <FaUserTie className="w-8 h-8 text-blue-600" />,
            title: "Profesional & Berpengalaman",
            description: "Tim kami terdiri dari para ahli dengan pengalaman bertahun-tahun dalam industri maritim dan energi."
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8 text-blue-600" />,
            title: "Akurasi & Kepatuhan",
            description: "Setiap inspeksi dilakukan dengan standar tertinggi, mengikuti regulasi nasional dan internasional."
        },
        {
            icon: <FaRocket className="w-8 h-8 text-blue-600" />,
            title: "Pelayanan Cepat & Efisien",
            description: "Kami memahami pentingnya waktu dalam bisnis Anda dan berkomitmen memberikan hasil yang cepat dan akurat."
        },
        {
            icon: <FaGlobeAmericas className="w-8 h-8 text-blue-600" />,
            title: "Jaringan Luas",
            description: "Dengan koneksi yang kuat di industri, kami siap memberikan layanan terbaik di berbagai lokasi."
        },
        {
            icon: <FaTools className="w-8 h-8 text-blue-600" />,
            title: "Teknologi Modern",
            description: "Menggunakan peralatan dan teknologi terkini untuk memastikan hasil inspeksi yang akurat dan efisien."
        },
        {
            icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
            title: "Jaminan Kualitas",
            description: "Memberikan jaminan kualitas terbaik untuk setiap layanan yang kami berikan dengan standar internasional."
        }
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Kami</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-500">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl">
                                <div className="text-blue-600">
                                    {advantage.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                                {advantage.title}
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}