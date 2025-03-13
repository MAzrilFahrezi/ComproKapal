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
            title: 'Cargo Marine Inquiry',
            description: 'Layanan pemeriksaan dan verifikasi kargo maritim dengan standar internasional.',
            features: [
                'Verifikasi kualitas dan kuantitas kargo',
                'Pengawasan pemuatan dan pembongkaran',
                'Dokumentasi dan pelaporan detail',
                'Koordinasi dengan pihak pelabuhan'
            ],
            image: 'https://images.unsplash.com/photo-1601311852860-1d8f42381551?auto=format&fit=crop&q=80',
            bgGradient: 'from-blue-600 to-blue-800'
        },
        {
            icon: <FaOilCan className="w-8 h-8" />,
            title: 'Petroleum & Chemical Inspection',
            description: 'Layanan inspeksi produk minyak dan bahan kimia dengan standar keamanan tinggi.',
            features: [
                'Analisis produk minyak dan kimia',
                'Sertifikasi kualitas produk',
                'Pengujian laboratorium komprehensif',
                'Pemantauan kualitas berkelanjutan'
            ],
            image: 'https://www.sgs.com/-/media/sgscorp/images/temporary/suitability-inspection-and-wall-wash.cdn.en.1.jpg',
            bgGradient: 'from-indigo-600 to-indigo-800'
        },
        {
            icon: <FaClipboardCheck className="w-8 h-8" />,
            title: 'P&I Surveyor',
            description: 'Layanan pemeriksaan dan investigasi profesional untuk klaim asuransi maritim.',
            features: [
                'Pemeriksaan klaim asuransi maritim',
                'Penilaian kerusakan kapal dan kargo',
                'Analisis penyebab kerusakan',
                'Rekomendasi pencegahan'
            ],
            image: 'https://theviswagroup.com/wp-content/themes/viswa/images/pi-surveys-section_2.png',
            bgGradient: 'from-cyan-600 to-cyan-800'
        },
        {
            icon: <FaAnchor className="w-8 h-8" />,
            title: 'Marine Survey & Inspection',
            description: 'Layanan survei kapal komprehensif untuk memastikan kelaikan dan keamanan operasional.',
            features: [
                'Inspeksi kondisi kapal menyeluruh',
                'Pemeriksaan kelaikan kapal',
                'Evaluasi sistem keselamatan',
                'Sertifikasi kelayakan'
            ],
            image: 'https://imgix-prod.sgs.com/-/jssmedia/sgscorp/images/natural-resources/draft-survey-tools-sgs-peru-nofocalpoint.cdn.en.1.jpg?fit=clip&auto=format&w=1600&h=900',
            bgGradient: 'from-blue-700 to-blue-900'
        },
        {
            icon: <FaWrench className="w-8 h-8" />,
            title: 'Technical Consulting',
            description: 'Layanan konsultasi teknis untuk optimasi operasional dan efisiensi kapal.',
            features: [
                'Konsultasi teknis operasional',
                'Optimasi kinerja sistem',
                'Audit teknis berkala',
                'Rekomendasi peningkatan'
            ],
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/SE/MS/PK/153138101/marine-consultancy-services-1000x1000.webp',
            bgGradient: 'from-indigo-700 to-indigo-900'
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: 'Quality Management',
            description: 'Layanan implementasi dan sertifikasi sistem manajemen mutu.',
            features: [
                'Implementasi sistem mutu',
                'Audit dan sertifikasi ISO',
                'Pelatihan personel',
                'Pengembangan SOP'
            ],
            image: 'https://www.oceanevogroup.com/wp-content/uploads/2019/09/services-quality-assurance.jpg',
            bgGradient: 'from-cyan-700 to-cyan-900'
        }
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

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-blue-500 opacity-30"></div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-blue-400 opacity-40"></div>
                <div className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-blue-600 opacity-20"></div>

                <div className="max-w-7xl mx-auto relative">
                    {/* Section header with decorative elements */}
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">Our Services</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Profesional Kami</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Solusi lengkap untuk kebutuhan perkapalan Anda dengan standar kualitas internasional
                            </p>
                        </motion.div>

                        {/* Decorative dots */}
                        <div className="absolute -top-6 left-1/4 flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="absolute -bottom-6 right-1/4 flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Card Header with Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {/* Wave overlay at bottom of image */}
                                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 text-white">
                                            <path fill="currentColor" fillOpacity="0.8" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                        </svg>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-5">{service.description}</p>
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-center space-x-3 group"
                                            >
                                                <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${service.bgGradient}`}></div>
                                                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                    {feature}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Learn more link */}

                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}