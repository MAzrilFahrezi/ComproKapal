export default function About() {
    return (
        <div className="space-y-16">
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Profil Perusahaan</h2>
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Compro-Kapal adalah perusahaan terkemuka dalam industri perkapalan yang telah berpengalaman lebih dari satu dekade. Kami berkomitmen untuk memberikan layanan berkualitas tinggi dalam pembuatan dan perbaikan kapal, dengan didukung oleh tim profesional dan teknologi modern.
                    </p>
                </div>
            </section>
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visi & Misi</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">Visi</h3>
                            <p className="text-gray-600">Menjadi perusahaan perkapalan terdepan di Indonesia dengan standar internasional dalam memberikan solusi perkapalan yang inovatif dan berkelanjutan.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">Misi</h3>
                            <ul className="text-gray-600 space-y-2 list-disc pl-4">
                                <li>Memberikan layanan berkualitas tinggi dengan standar keamanan terbaik</li>
                                <li>Mengembangkan inovasi teknologi dalam industri perkapalan</li>
                                <li>Membangun kemitraan yang kuat dengan stakeholder</li>
                                <li>Berkontribusi pada pertumbuhan industri maritim nasional</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-4xl mx-auto px-4 mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tim Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'John Doe',
                            position: 'CEO',
                            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                        },
                        {
                            name: 'Jane Smith',
                            position: 'Technical Director',
                            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                        },
                        {
                            name: 'Mike Johnson',
                            position: 'Operations Manager',
                            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                        }
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-gray-600">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
