import React, { useState, useEffect } from 'react';

const images = [
  '/1.png',
  '/2.png',
  '/3.jpg',
  '/4.webp',
  '/5.jpg',
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative min-h-screen sm:min-h-[80vh] flex items-center sm:items-start justify-center text-white text-center overflow-hidden bg-black pt-0 sm:pt-20">
      {/* Background Image Slideshow */}
      {images.map((src, index) => {
        const defaultPosition = '50% 0%';
        const slideStyle: React.CSSProperties = {
          backgroundImage: `url('${src}')`,
          zIndex: 1,
          backgroundPosition: defaultPosition,
          backgroundSize: 'cover',
        };

        return (
          <div
            key={src}
            className={`absolute inset-0 hero-bg ${index === currentIndex ? 'active' : 'inactive'}`}
            style={{ ...slideStyle, opacity: index === currentIndex ? 1 : 0 }}
          />
        );
      })}
      
      {/* Overlay: Removed for maximum image visibility */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-0" style={{ zIndex: 2 }}></div>

      {/* Content - Adjusted for extremely tall section */}
      <div className="relative z-10 p-4 sm:p-6 max-w-6xl mx-auto w-full" style={{ zIndex: 3 }}>
        <h1 className="font-nastaliq hero-title leading-none mb-4 animate-fade-in-down animate-text-glow animate-multi-color">
          غزاله تقوی
        </h1>
        <p className="hero-subtitle text-base sm:text-lg md:text-xl font-light mb-4 animate-fade-in-up">
          وکیل پایه یک دادگستری و میانجیگر رسمی قوه قضائیه
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-300">
          <a href="#booking" className="bg-blue-600 text-white font-semibold py-3 px-6 sm:py-2 sm:px-6 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto text-center text-sm sm:text-base">
            رزرو وقت مشاوره
          </a>
          <a href="#services" className="bg-white/20 text-white font-semibold py-3 px-6 sm:py-2 sm:px-6 rounded-lg hover:bg-white/30 backdrop-blur-sm transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto text-center text-sm sm:text-base">
            آشنایی با خدمات
          </a>
        </div>
      </div>
      
      <style>{`
        :root {
          --hero-scale-active: 1; /* Reduced from 1.05 to eliminate zoom */
          --hero-scale-inactive: 1;
          --hero-rotate-active: 0deg;
          --hero-rotate-inactive: 0deg; /* Simplified rotation */
          --hero-saturate-active: 1;
          --hero-saturate-inactive: 1;
          --hero-translate-x: 0%; /* No translation */
        }
        @media (min-width: 1024px) {
          :root {
            --hero-scale-active: 1;
            --hero-scale-inactive: 1;
            --hero-rotate-active: 0deg;
            --hero-rotate-inactive: 0deg;
            --hero-saturate-active: 1;
            --hero-saturate-inactive: 1;
            --hero-translate-x: 0%;
          }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 35px rgba(255, 255, 255, 0.5);
          }
        }
        @keyframes zoom-in {
          0% {
            opacity: 0;
            transform: translateX(0%) rotateZ(0deg); /* No scale */
            filter: blur(1px) brightness(1) saturate(1);
          }
          100% {
            opacity: 1;
            transform: translateX(0%) rotateZ(0deg);
            filter: blur(0px) brightness(1.1) contrast(1.05) saturate(1); /* Mild brightness */
            box-shadow: none; /* Remove inset shadow to avoid darkening */
          }
        }
        @keyframes zoom-out {
          0% {
            opacity: 1;
            transform: translateX(0%) rotateZ(0deg);
            filter: blur(0px) brightness(1.1) contrast(1.05) saturate(1);
            box-shadow: none;
          }
          100% {
            opacity: 0;
            transform: translateX(0%) rotateZ(0deg);
            filter: blur(1px) brightness(1) saturate(1);
            box-shadow: none;
          }
        }
        @media (min-width: 1024px) {
          @keyframes zoom-in {
            0% {
              opacity: 0;
              transform: translateX(0%) rotateZ(0deg);
              filter: brightness(1) contrast(1);
            }
            100% {
              opacity: 1;
              transform: translateX(0%) rotateZ(0deg);
              filter: brightness(1.05) contrast(1.05);
              box-shadow: none;
            }
          }
          @keyframes zoom-out {
            0% {
              opacity: 1;
              transform: translateX(0%) rotateZ(0deg);
              filter: brightness(1.05) contrast(1.05);
              box-shadow: none;
            }
            100% {
              opacity: 0;
              transform: translateX(0%) rotateZ(0deg);
              filter: brightness(1) contrast(1);
              box-shadow: none;
            }
          }
          .hero-bg {
            background-size: cover !important;
            background-position: center top !important;
            background-repeat: no-repeat !important;
          }
        }
        .hero-bg {
          background-position: center top; /* Adjusted for better face visibility */
          background-size: cover;
          background-repeat: no-repeat;
          will-change: opacity, transform, filter;
          animation-timing-function: ease-in-out;
        }
        .hero-bg.active {
          animation: zoom-in 2s ease-out forwards;
          z-index: 2;
        }
        .hero-bg.inactive {
          animation: zoom-out 2s ease-out forwards;
        }
        @media (min-width: 640px) { .hero-title { font-size: 5rem; } }
        @media (min-width: 768px) { .hero-title { font-size: 7rem; } }
        @media (min-width: 1024px) { .hero-title { font-size: 9rem; } }
        @keyframes multi-color {
          0% { color: #fff; }
          25% { color: #4F46E5; }
          50% { color: #7C3AED; }
          75% { color: #D97706; }
          100% { color: #fff; }
        }
        .animate-multi-color {
          animation: multi-color 5s ease-in-out infinite;
        }
        /* Mobile adjustments for better image sizing and face visibility */
        @media (max-width: 640px) {
          #home {
            min-height: 80vh !important;
            padding-top: 5rem !important;
          }
          .hero-bg {
            background-size: cover !important;
            background-position: center top !important; /* Focus on top for face */
          }
          .hero-title { 
            font-size: 4rem; 
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Slightly lighter shadow */
          }
          .hero-subtitle {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-title { font-size: 6rem; }
        }

        @media (min-width: 1025px) {
          .hero-title { font-size: 10rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg, .hero-bg.active { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
