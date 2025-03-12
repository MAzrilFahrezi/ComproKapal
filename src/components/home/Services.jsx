import React from 'react';
import { FaShip, FaOilCan, FaClipboardCheck, FaAnchor, FaWrench, FaChartLine } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaShip className="w-8 h-8 text-blue-600" />,
            title: "Cargo Marine Inquiry",
            mainPoints: [
                "Verifikasi dan pemeriksaan kargo maritim untuk memastikan kualitas dan kuantitas sesuai dengan standar.",
                "Pengawasan pemuatan dan pembongkaran kargo."
            ],
            additionalPoints: [
                "Dokumentasi dan pelaporan detail",
                "Koordinasi dengan pihak pelabuhan"
            ]
        },
        {
            icon: <FaOilCan className="w-8 h-8 text-blue-600" />,
            title: "Petroleum & Chemical Inspection",
            mainPoints: [
                "Analisis dan inspeksi produk minyak serta bahan kimia untuk menjamin kepatuhan terhadap spesifikasi industri.",
                "Sertifikasi kualitas produk sebelum pengiriman."
            ],
            additionalPoints: [
                "Pengujian laboratorium komprehensif",
                "Pemantauan kualitas berkelanjutan"
            ]
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8 text-blue-600" />,
            title: "P&I Surveyor",
            mainPoints: [
                "Pemeriksaan dan investigasi klaim asuransi maritim.",
                "Penilaian kerusakan kapal dan kargo."
            ],
            additionalPoints: [
                "Analisis penyebab kerusakan",
                "Rekomendasi pencegahan"
            ]
        },
        {
            icon: <FaAnchor className="w-8 h-8 text-blue-600" />,
            title: "Marine Survey & Inspection",
            mainPoints: [
                "Inspeksi kondisi kapal secara menyeluruh.",
                "Pemeriksaan kelaikan kapal sesuai standar internasional."
            ],
            additionalPoints: [
                "Evaluasi sistem keselamatan",
                "Sertifikasi kelayakan"
            ]
        },
        {
            icon: <FaWrench className="w-8 h-8 text-blue-600" />,
            title: "Technical Consulting",
            mainPoints: [
                "Konsultasi teknis untuk operasional kapal.",
                "Optimasi kinerja dan efisiensi sistem."
            ],
            additionalPoints: [
                "Audit teknis berkala",
                "Rekomendasi peningkatan"
            ]
        },
        {
            icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
            title: "Quality Management",
            mainPoints: [
                "Implementasi sistem manajemen mutu.",
                "Audit dan sertifikasi standar ISO."
            ],
            additionalPoints: [
                "Pelatihan personel",
                "Pengembangan SOP"
            ]
        }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Kami menyediakan berbagai layanan profesional dalam industri maritim dengan standar internasional dan komitmen untuk kualitas terbaik.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-500 group">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300">
                                <div className="text-blue-600">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <div className="space-y-4">
                                {service.mainPoints.map((point, idx) => (
                                    <p key={idx} className="text-gray-600 text-center leading-relaxed">
                                        {point}
                                    </p>
                                ))}
                                <ul className="mt-4 space-y-2">
                                    {service.additionalPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-center text-gray-500 text-sm">
                                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}