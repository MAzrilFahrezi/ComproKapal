import React from 'react';

export default function AboutCompany() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Tentang Kami</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        PT. Orionindo Jaya Ocean adalah perusahaan terdepan dalam bidang jasa Cargo Marine Inquiry, Petroleum & Chemical Inspection, serta P&I Surveyor. Berdiri dengan komitmen untuk memberikan layanan inspeksi dan konsultasi yang profesional, kami melayani berbagai kebutuhan industri maritim dan energi dengan standar internasional.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Berbasis di Palembang, Indonesia, kami hadir untuk memastikan kelancaran serta keamanan dalam setiap aktivitas operasional klien kami. Dengan tim ahli yang berpengalaman dan peralatan modern, kami menjamin kualitas layanan terbaik untuk setiap proyek yang kami tangani.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-4">
                            <div className="text-blue-600 font-bold text-2xl mb-2">15+</div>
                            <div className="text-gray-600">Tahun Pengalaman</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-blue-600 font-bold text-2xl mb-2">500+</div>
                            <div className="text-gray-600">Proyek Selesai</div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-blue-600 font-bold text-2xl mb-2">100%</div>
                            <div className="text-gray-600">Kepuasan Klien</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}