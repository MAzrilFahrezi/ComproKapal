import React from 'react';
import { FaHandshake, FaShieldAlt, FaLeaf } from 'react-icons/fa';

export default function Partners() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Klien & Mitra Kami</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        PT. Orionindo Jaya Ocean telah bekerja sama dengan berbagai perusahaan terkemuka di sektor maritim, minyak, dan kimia. 
                        Kepercayaan yang diberikan oleh klien kami menjadi bukti komitmen kami dalam memberikan layanan terbaik dan profesional.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {[1, 2, 3, 4].map((partner) => (
                        <div key={partner} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <div className="flex items-center justify-center h-24">
                                <span className="text-gray-400">Logo Mitra {partner}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <FaHandshake className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Kolaborasi yang Kuat</h3>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto">
                        Kami bangga telah menjalin kemitraan dengan berbagai perusahaan terkemuka dalam industri maritim dan energi. 
                        Setiap kerjasama kami dibangun atas dasar kepercayaan, profesionalisme, dan komitmen untuk memberikan layanan terbaik.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-white">
                            <div className="flex items-center mb-4">
                                <FaShieldAlt className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">Komitmen Keamanan</h3>
                            </div>
                            <p className="text-blue-100">
                                Sebagai perusahaan yang bergerak di sektor maritim dan energi, kami berkomitmen untuk menjaga keamanan kerja 
                                serta mematuhi regulasi keselamatan internasional dalam setiap aspek operasional kami.
                            </p>
                        </div>
                        <div className="text-white">
                            <div className="flex items-center mb-4">
                                <FaLeaf className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">Komitmen Lingkungan</h3>
                            </div>
                            <p className="text-blue-100">
                                Kami menerapkan prosedur yang ramah lingkungan dan berkomitmen untuk menjaga kelestarian lingkungan 
                                dalam setiap aktivitas operasional perusahaan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}