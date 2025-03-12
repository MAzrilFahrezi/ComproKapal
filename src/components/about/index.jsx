import React from 'react';

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Tentang Kami</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-blue-900">Sejarah Perusahaan</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Sejak didirikan, perusahaan kami telah berkomitmen untuk memberikan layanan terbaik dalam industri perkapalan. 
                        Dengan pengalaman lebih dari satu dekade, kami telah menangani berbagai proyek besar dan kompleks.
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-900">Visi & Misi</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visi</h3>
                            <p className="text-gray-600">Menjadi perusahaan perkapalan terkemuka yang diakui secara nasional dan internasional.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Misi</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Memberikan layanan berkualitas tinggi</li>
                                <li>Mengembangkan teknologi dan inovasi</li>
                                <li>Membangun kemitraan yang kuat</li>
                                <li>Berkontribusi pada industri maritim nasional</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-blue-900">Tim Kami</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Tim kami terdiri dari para profesional berpengalaman dalam industri perkapalan. 
                        Setiap anggota tim memiliki keahlian spesifik yang berkontribusi pada kesuksesan setiap proyek.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                                <h3 className="text-lg font-semibold text-gray-800">Nama Anggota {member}</h3>
                                <p className="text-gray-600">Posisi</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}