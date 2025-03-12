export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-gray-600 mb-4">
                    Silakan hubungi kami untuk informasi lebih lanjut:
                </p>
                <div className="space-y-2">
                    <p className="text-gray-600"><strong>Alamat:</strong> Jl. Contoh No. 123, Kota, Indonesia</p>
                    <p className="text-gray-600"><strong>Email:</strong> info@compro-kapal.com</p>
                    <p className="text-gray-600"><strong>Telepon:</strong> (021) 1234-5678</p>
                </div>
            </div>
        </div>
    );
}
