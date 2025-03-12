export default function Services() {
    return (
        <div className="space-y-16">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Layanan Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-900">Pembuatan Kapal</h3>
                        <p className="text-gray-600 mb-6">Jasa pembuatan kapal sesuai dengan kebutuhan dan spesifikasi yang Anda inginkan, dengan standar kualitas internasional.</p>
                        <ul className="text-gray-600 space-y-2 list-disc pl-4">
                            <li>Desain kapal custom</li>
                            <li>Konstruksi berkualitas tinggi</li>
                            <li>Pengawasan ketat setiap tahap</li>
                            <li>Garansi kualitas</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-900">Perbaikan Kapal</h3>
                        <p className="text-gray-600 mb-6">Layanan perbaikan dan pemeliharaan kapal dengan standar kualitas tinggi dan tim profesional.</p>
                        <ul className="text-gray-600 space-y-2 list-disc pl-4">
                            <li>Perbaikan struktur kapal</li>
                            <li>Pemeliharaan rutin</li>
                            <li>Upgrade sistem</li>
                            <li>Penggantian komponen</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Keunggulan Layanan Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">Kualitas Terjamin</h3>
                            <p className="text-gray-600">Menggunakan material dan komponen berkualitas tinggi</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">Tim Ahli</h3>
                            <p className="text-gray-600">Dikerjakan oleh teknisi dan engineer berpengalaman</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">Layanan 24/7</h3>
                            <p className="text-gray-600">Dukungan teknis dan layanan darurat 24 jam</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
