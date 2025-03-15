import React from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaTools, FaClipboardCheck, FaCog, FaArrowRight, FaOilCan, FaAnchor, FaWrench, FaChartLine, FaUserTie, FaRocket, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import Stats from './Stats';
import Process from './Process';
import Advantages from './Advantages';

export default function Services() {
    const services = [
        {
            icon: <FaShip className="w-8 h-8" />,
            title: 'Survei Kapal',
            description: 'Layanan survei kapal komprehensif untuk memastikan kelaikan dan keamanan operasional dengan standar internasional.',
            features: [
                'Survei Draft',
                'Survei Kondisi On/Off Hire untuk Semua Jenis Kapal',
                'Survei Kondisi Kerusakan Kapal untuk Klaim Asuransi',
                'Inspeksi Pra-Charter dan Pra-Pembelian Kapal',
                'Inspeksi Kondisi Umum Lambung dan Mesin',
                'Survei Bunker',
                'Survei Towing dan Lashing',
                'Investigasi Perlindungan dan Hal-hal Terkait Club Indemnity'
            ],
            image: 'https://www.tuv.com/content-media-files/government-inspections-international-trade/tuev-rheinland-government-inspections-international-trade-marine-st-1393552976_core_8_3.jpg',
            bgGradient: 'from-blue-600 to-blue-800'
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8" />,
            title: 'Survei Kargo',
            description: 'Memfasilitasi pelaksanaan transaksi yang cepat dan efisien, meningkatkan keamanan dan keandalan, serta mencegah gangguan jadwal pengiriman.',
            features: [
                'Survei/inspeksi bongkar muat',
                'Survei pra-pengiriman',
                'Survei pra-pembongkaran',
                'Pengawasan penataan, pengamanan, dan pengikatan kargo',
                'Survei kondisi kargo dan pengawasan kargo',
                'Penentuan kuantitas melalui sounding, penimbangan, tally, dan survei draft',
                'Survei kontainer, minyak, dan bahan kimia',
                'Pengambilan sampel kargo untuk analisis dan penentuan kualitas'
            ],
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/DC/AM/FR/4155215/cargo-survey-services.jpg',
            bgGradient: 'from-indigo-600 to-indigo-800'
        },

    ];

    const stats = [
        { number: "500+", label: "Proyek Selesai" },
        { number: "50+", label: "Partnership" },
        { number: "15+", label: "Tahun Pengalaman" },
        { number: "100%", label: "Kepuasan Klien" }
    ];

    const processes = [
        {
            title: "Konsultasi Awal",
            description: "Diskusi mendalam tentang kebutuhan dan spesifikasi proyek Anda",
            icon: "🤝"
        },
        {
            title: "Perencanaan",
            description: "Penyusunan rencana detail dan timeline proyek",
            icon: "📋"
        },
        {
            title: "Eksekusi",
            description: "Pelaksanaan proyek dengan standar kualitas tinggi",
            icon: "⚙️"
        },
        {
            title: "Quality Control",
            description: "Pemeriksaan menyeluruh untuk memastikan hasil terbaik",
            icon: "✓"
        }
    ];

    const advantages = [
        {
            icon: <FaUserTie className="w-8 h-8" />,
            title: "Profesional & Berpengalaman",
            description: "Tim kami terdiri dari para ahli dengan pengalaman bertahun-tahun dalam industri maritim dan energi."
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8" />,
            title: "Akurasi & Kepatuhan",
            description: "Setiap inspeksi dilakukan dengan standar tertinggi, mengikuti regulasi nasional dan internasional."
        },
        {
            icon: <FaRocket className="w-8 h-8" />,
            title: "Pelayanan Cepat & Efisien",
            description: "Kami memahami pentingnya waktu dalam bisnis Anda dan berkomitmen memberikan hasil yang cepat dan akurat."
        },
        {
            icon: <FaGlobeAmericas className="w-8 h-8" />,
            title: "Jaringan Luas",
            description: "Dengan koneksi yang kuat di industri, kami siap memberikan layanan terbaik di berbagai lokasi."
        },
        {
            icon: <FaTools className="w-8 h-8" />,
            title: "Teknologi Modern",
            description: "Menggunakan peralatan dan teknologi terkini untuk memastikan hasil inspeksi yang akurat dan efisien."
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Jaminan Kualitas",
            description: "Memberikan jaminan kualitas terbaik untuk setiap layanan yang kami berikan dengan standar internasional."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Animated Background */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900"></div>
                    {/* Animated circles */}
                    <div className="absolute top-20 right-0 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Layanan Kami
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Solusi lengkap untuk kebutuhan perkapalan Anda dengan standar kualitas internasional
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Section with Background Waves */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Top wave decoration */}
                <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-blue-900 transform translate-y-1">
                        <path fill="currentColor" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative">
                    {/* Section header with decorative elements */}
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                                Layanan Kami
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Solusi Profesional
                            </h2>
                            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Memberikan layanan survei berkualitas tinggi dengan standar internasional
                            </p>
                        </motion.div>
                    </div>

                    {/* Updated grid to 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Card Header with Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                    {/* Title Overlay - Removed icon section */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                        <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-gray-200 text-lg">{service.description}</p>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-8">
                                    <div className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-start space-x-4 group"
                                            >
                                                <div className={`flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r ${service.bgGradient}`}></div>
                                                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                    {feature}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced hover effects */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}