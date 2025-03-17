import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from '../../context/LanguageContext';

export default function ImageSlider() {
  const { translate, currentLanguage } = useLanguage();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?q=80&w=1974&auto=format&fit=crop&q=80',
      title: translate('home.slider.slide1.title'),
      subtitle: translate('home.slider.slide1.subtitle'),
      description: translate('home.slider.slide1.description')
    },
    {
      url: 'https://images.unsplash.com/photo-1563119162-b3a3fcf67f8a?q=80&w=2070&auto=format&fit=crop&q=80',
      title: translate('home.slider.slide2.title'),
      subtitle: translate('home.slider.slide2.subtitle'),
      description: translate('home.slider.slide2.description')
    },
    {
      url: 'https://images.unsplash.com/photo-1595587637401-83ff822bd63e?q=80&w=2101&auto=format&fit=crop&q=80',
      title: translate('home.slider.slide3.title'),
      subtitle: translate('home.slider.slide3.subtitle'),
      description: translate('home.slider.slide3.description')
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
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ship-pattern.png')] opacity-10" style={{ zIndex: 1 }}></div>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-screen">
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${currentSlide === index ? 'brightness-80 scale-100' : 'brightness-60 scale-110'}`}
                style={{ backgroundImage: `url(${image.url})`, zIndex: 2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" style={{ zIndex: 3 }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" style={{ zIndex: 3 }} />
              </div>
              <div className="relative h-full flex items-center justify-start text-left px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto" style={{ zIndex: 10 }}>
                <div
                  className={`space-y-6 max-w-3xl transition-all duration-700 ease-out ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight drop-shadow-lg"
                  >
                    {image.title}
                  </h2>
                  <p
                    className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-md"
                  >
                    {image.subtitle}
                  </p>
                  <p
                    className="text-base md:text-lg text-gray-300 mb-8 drop-shadow-md"
                  >
                    {image.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl backdrop-blur-sm transition-all duration-300"
                    >
                      {currentLanguage === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                    </a>
                    <a
                      href="/services"
                      className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 hover:scale-105 hover:shadow-xl backdrop-blur-sm transition-all duration-300"
                    >
                      {currentLanguage === 'id' ? 'Layanan Kami' : 'Our Services'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <style jsx="true">{`
          :global(.slick-dots) {
            bottom: 20px;
            z-index: 20;
          }
          
          :global(.slick-dots li button:before) {
            color: white;
            opacity: 0.5;
            font-size: 12px;
          }
          
          :global(.slick-dots li.slick-active button:before) {
            color: white;
            opacity: 1;
          }

          :global(.slick-prev), :global(.slick-next) {
            z-index: 30;
          }
        `}</style>
      </div>
    </>
  );
}