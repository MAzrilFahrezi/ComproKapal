import React from 'react';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Tentangkami() {
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
      {/* Bagian Tentang Kami */}
      <section className="relative mb-16">
        <img 
          src="https://img.freepik.com/premium-photo/cargo-ship-ocean-with-containers_951562-15636.jpg" 
          alt="Kapal Kargo" 
          className="w-full h-64 object-cover rounded-none"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">PT. ORIONINDO JAYA OCEAN</h2>
        </div>
      </section>

      {/* Visi dan Misi dengan Slider */}
      <section className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Slider {...settings}>
            <div>
              <img 
                src="https://sip-exim.co.id/uploads/sip/230503MOzB0bLPyGgCXRhFk6pDjraZovVlU4cEw5e7qimuf9TY2xsQSA8KdNn1H3JI.jpg" 
                alt="Kapal 1" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <img 
                src="https://th.bing.com/th/id/OIP.T84PJ_BdwtJS8c7Dx9rykAAAAA?w=470&h=315&rs=1&pid=ImgDetMain" 
                alt="Kapal 2" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <img 
                src="https://1.bp.blogspot.com/-zn0qJOlr92c/YLoKLtCYALI/AAAAAAAAA8o/w9JwDaoz_94yttWL-7oELTIjwF7WWESfQCLcBGAsYHQ/s504/11.%2BTugboat%2BDesign.png" 
                alt="Kapal 3" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </Slider>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-semibold mb-4">Visi</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Menjadi mitra terpercaya dalam industri maritim dan energi, dengan layanan inspeksi dan konsultasi yang profesional, inovatif, serta berbasis teknologi terkini.
          </p>
          <h3 className="text-2xl font-semibold mb-4 mt-8">Misi</h3>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Memberikan layanan inspeksi yang akurat dan terpercaya untuk memastikan kepatuhan terhadap regulasi internasional.</li>
            <li>Mengutamakan kepuasan pelanggan dengan solusi yang tepat, cepat, dan efisien.</li>
            <li>Mengembangkan SDM yang kompeten dan profesional di bidang marine cargo inspection serta chemical and petroleum survey.</li>
            <li>Berinovasi dalam layanan berbasis teknologi untuk meningkatkan efisiensi dan akurasi.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Tentangkami;

