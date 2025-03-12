import React from 'react';

export default function Partners() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mitra Kerjasama</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((partner) => (
                    <div key={partner} className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-32">
                        <span className="text-gray-400">Logo Mitra {partner}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}