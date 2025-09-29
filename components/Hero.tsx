import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&grayscale',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop&grayscale',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop&grayscale',
  'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1920&h=1080&fit=crop&grayscale',
  'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1920&h=1080&fit=crop&grayscale',
  'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?w=1920&h=1080&fit=crop&grayscale',
  'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=1920&h=1080&fit=crop&grayscale',
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image Slideshow */}
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60" style={{ zIndex: 2 }}></div>

      {/* Content */}
      <div className="relative z-10 p-6 max-w-3xl" style={{ zIndex: 3 }}>
        <h1 className="font-nastaliq text-7xl md:text-9xl leading-tight mb-4 animate-fade-in-down animate-text-glow">
          غزاله تقوی
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up">
          وکیل پایه یک دادگستری و میانجیگر رسمی قوه قضائیه
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse animate-fade-in-up animation-delay-300">
          <a href="#booking" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg">
            رزرو وقت مشاوره
          </a>
          <a href="#services" className="bg-white/20 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/30 backdrop-blur-sm transition-transform duration-300 hover:scale-105 shadow-lg">
            آشنایی با خدمات
          </a>
        </div>
      </div>
      <style>{`
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
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animate-text-glow {
          color: #fff;
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
