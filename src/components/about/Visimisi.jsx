import React from 'react';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

function Visimisi() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="w-full">
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Visi & Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img 
                src="https://sip-exim.co.id/uploads/sip/230503MOzB0bLPyGgCXRhFk6pDjraZovVlU4cEw5e7qimuf9TY2xsQSA8KdNn1H3JI.jpg" 
                alt="Visi"
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi mitra terpercaya dalam industri maritim dan energi, dengan layanan inspeksi dan konsultasi yang profesional, inovatif, serta berbasis teknologi terkini.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img 
                src="https://th.bing.com/th/id/OIP.T84PJ_BdwtJS8c7Dx9rykAAAAA?w=470&h=315&rs=1&pid=ImgDetMain" 
                alt="Misi"
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Misi</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan layanan inspeksi yang akurat dan terpercaya untuk memastikan kepatuhan terhadap regulasi internasional.</li>
                <li>Mengutamakan kepuasan pelanggan dengan solusi yang tepat, cepat, dan efisien.</li>
                <li>Mengembangkan SDM yang kompeten dan profesional di bidang marine cargo inspection serta chemical and petroleum survey.</li>
                <li>Berinovasi dalam layanan berbasis teknologi untuk meningkatkan efisiensi dan akurasi.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visimisi;

