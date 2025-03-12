import React from 'react';

export default function Services() {
    const services = [
        {
            title: 'Pembuatan Kapal',
            description: 'Jasa pembuatan kapal baru dengan berbagai ukuran dan spesifikasi sesuai kebutuhan.',
            features: [
                'Desain kustom sesuai kebutuhan',
                'Material berkualitas tinggi',
                'Tim ahli berpengalaman',
                'Jaminan kualitas'
            ]
        },
        {
            title: 'Perbaikan & Pemeliharaan',
            description: 'Layanan perbaikan dan pemeliharaan kapal untuk memastikan performa optimal.',
            features: [
                'Perbaikan struktur kapal',
                'Pemeliharaan rutin',
                'Upgrade sistem',
                'Penggantian komponen'
            ]
        },
        {
            title: 'Konsultasi Teknis',
            description: 'Layanan konsultasi untuk proyek perkapalan dan kelautan.',
            features: [
                'Analisis kelayakan',
                'Perencanaan proyek',
                'Optimasi desain',
                'Evaluasi teknis'
            ]
        },
        {
            title: 'Manajemen Proyek',
            description: 'Pengelolaan proyek perkapalan dari awal hingga selesai.',
            features: [
                'Perencanaan timeline',
                'Kontrol kualitas',
                'Manajemen sumber daya',
                'Pelaporan progress'
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Layanan Kami</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h2>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}