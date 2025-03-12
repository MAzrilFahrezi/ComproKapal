import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80',
    title: 'Pembuatan Kapal Berkualitas'
  },
  {
    url: 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&q=80',
    title: 'Layanan Perbaikan Profesional'
  },
  {
    url: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80',
    title: 'Solusi Perkapalan Terpadu'
  }
];

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {image.title}
                </h2>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}