import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ImageSlider from './components/ImageSlider';

function Home() {
  return (
    <div className="space-y-16">
      <ImageSlider />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Tentang Perusahaan</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            Kami adalah perusahaan terkemuka dalam industri perkapalan, berkomitmen untuk memberikan solusi terbaik dalam pembuatan dan perbaikan kapal dengan standar kualitas tertinggi.
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
          {/* Placeholder untuk logo mitra */}
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

function About() {
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


function Services() {
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

function Gallery() {
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

function Contact() {
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

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}
