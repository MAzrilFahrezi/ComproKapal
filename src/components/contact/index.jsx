import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Hubungi Kami</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                <div className="w-full h-96 mb-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d104.12345678901234!3d-2.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1f123456789abc%3A0x1234567890abcdef!2sJl.%20Sutan%20Syahrir%20Lr.%20Kamboja%20No.691%2C%20Palembang%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Lokasi Kami"
                ></iframe>
            </div>
                    <h2 className="text-2xl font-semibold text-blue-900">Informasi Kontak</h2>
                    <div className="space-y-2">
                        <div className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Alamat</h3>
                                <p className="text-gray-600">Jl.Sutan Syahrir Lr. Kamboja No.691 Palembang - Indonesia</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Telepon</h3>
                                <p className="text-gray-600">+62 31 1234 5678</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">info@perusahaankapal.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-6">Kirim Pesan</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}