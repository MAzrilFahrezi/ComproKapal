export default function Gallery() {
    const projects = [
        {
            title: 'Pembuatan Kapal Cargo',
            description: 'Proyek pembuatan kapal cargo dengan kapasitas 1000 ton',
            image: 'https://images.unsplash.com/photo-1520955343322-5abc70c1db66?auto=format&fit=crop&q=80'
        },
        {
            title: 'Perbaikan Kapal Tanker',
            description: 'Perbaikan menyeluruh sistem navigasi dan mesin',
            image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80'
        },
        {
            title: 'Modernisasi Kapal',
            description: 'Upgrade sistem dan peralatan kapal penumpang',
            image: 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&q=80'
        },
        {
            title: 'Konstruksi Kapal Baru',
            description: 'Pembangunan kapal dengan teknologi terkini',
            image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Galeri Proyek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                        <div className="h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
