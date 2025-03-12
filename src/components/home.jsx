import ImageSlider from './ImageSlider';

export default function Home() {
    return (
        <div className="space-y-16">
            <ImageSlider />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Tentang Perusahaan</h2>
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                        kami adalah perusahaan terkemuka dalam industri perkapalan, berkomitmen untuk memberikan solusi terbaik dalam pembuatan dan perbaikan kapal dengan standar kualitas tertinggi.
                    </p>
                </div>
            </section>
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
        </div>
    );
}
