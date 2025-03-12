import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1559091169-7d20f6c73614?auto=format&fit=crop&q=80',
    title: 'Survey Dan Verifikasi',
    subtitle: 'Layanan Inspeksi Profesional',
    description: 'Layanan survey dan verifikasi kami mencakup berbagai aspek industri maritim dengan standar internasional untuk memastikan keamanan dan kepatuhan.'
  },
  {
    url: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80',
    title: 'Layanan Perbaikan Profesional',
    subtitle: 'Tim Ahli & Peralatan Terkini',
    description: 'Didukung oleh tim profesional berpengalaman dan peralatan modern untuk memberikan layanan perbaikan kapal terbaik.'
  },
  {
    url: 'https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=80',
    title: 'Solusi Perkapalan Terpadu',
    subtitle: 'Kualitas & Kehandalan Terjamin',
    description: 'Menyediakan solusi lengkap untuk kebutuhan perkapalan Anda dengan standar kualitas tertinggi dan jaminan kehandalan.'
  }
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
    aria-label="Next slide"
  >
    <svg
      className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
    aria-label="Previous slide"
  >
    <svg
      className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-screen">
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              initial={{ scale: 1.1, filter: 'brightness(0.8)' }}
              animate={{
                scale: currentSlide === index ? 1 : 1.1,
                filter: currentSlide === index ? 'brightness(0.8)' : 'brightness(0.6)'
              }}
              transition={{ duration: 6 }}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
              <div className="absolute inset-0 bg-[url('/ship-pattern.png')] opacity-10" />
            </motion.div>
            <div className="relative h-full flex items-center justify-start text-left px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="space-y-6 max-w-3xl"
              >
                <motion.h2
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight drop-shadow-lg"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                  {image.title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-md"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                >
                  {image.subtitle}
                </motion.p>
                <motion.p
                  className="text-base md:text-lg text-gray-300 mb-8 drop-shadow-md"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.65, ease: 'easeOut' }}
                >
                  {image.description}
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                >
                  <motion.a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hubungi Kami
                  </motion.a>
                  <motion.a
                    href="/services"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Layanan Kami
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>
      <style jsx>{`
        .wave-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: url('data:image/svg+xml,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" fill="%23ffffff" fill-opacity=".15"/></svg>') repeat-x;
          animation: wave 25s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform: translate3d(0, 0, 0);
          filter: blur(1px);
        }
        .wave1 {
          opacity: 0.3;
          animation: wave 20s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          filter: blur(0px);
        }
        .wave2 {
          opacity: 0.2;
          animation: wave 15s cubic-bezier(0.4, 0, 0.2, 1) -.125s infinite;
          filter: blur(1px);
        }
        .wave3 {
          opacity: 0.15;
          animation: wave 10s cubic-bezier(0.4, 0, 0.2, 1) -.5s infinite;
          filter: blur(2px);
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          50% { transform: translateX(-50%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}