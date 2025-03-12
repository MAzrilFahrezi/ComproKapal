import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">Selamat Datang di Compro-Kapal</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Solusi Terpercaya untuk Kebutuhan Kapal Anda</p>
      <div className="mt-10">
        <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block">Hubungi Kami</a>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
      <p className="text-gray-600 mb-4">
        Kami adalah perusahaan yang bergerak di bidang industri perkapalan, menyediakan berbagai layanan dan solusi untuk kebutuhan kapal Anda.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Pembuatan Kapal</h3>
          <p className="text-gray-600">Jasa pembuatan kapal sesuai dengan kebutuhan dan spesifikasi yang Anda inginkan.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Perbaikan Kapal</h3>
          <p className="text-gray-600">Layanan perbaikan dan pemeliharaan kapal dengan standar kualitas tinggi.</p>
        </div>
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
        </Routes>
      </Layout>
    </Router>
  );
}
