import React from 'react';

export default function Advantages() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Keunggulan Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-blue-900">Pengalaman Terpercaya</h3>
                        <p className="text-gray-600">Lebih dari 10 tahun pengalaman dalam industri perkapalan</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-blue-900">Tim Profesional</h3>
                        <p className="text-gray-600">Didukung oleh tim ahli yang berpengalaman dan profesional</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 text-blue-900">Teknologi Modern</h3>
                        <p className="text-gray-600">Menggunakan teknologi terkini dalam setiap proyek</p>
                    </div>
                </div>
            </div>
        </section>
    );
}