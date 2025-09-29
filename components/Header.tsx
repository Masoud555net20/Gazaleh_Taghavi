import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'خدمات', href: '#services' },
    { name: 'درباره من', href: '#about' },
    { name: 'روند کار', href: '#process' },
    { name: 'مشاور هوشمند', href: '#assistant' },
    { name: 'پرداخت', href: '#payment' },
    { name: 'سوالات متداول', href: '#faq' },
    { name: 'مقالات', href: '#blog' },
    { name: 'نظرات موکلین', href: '#testimonials' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl border-b border-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-0">
        <div className="flex items-center justify-between">
          <div className="w-36 h-auto">
            <a href="#" className="transition-all duration-300 hover:scale-110">
              <img src="/5.png" alt="غزاله تقوی" className="w-36 h-auto animate-shimmer-glow animate-float" />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`transition-colors duration-300 font-medium text-sm ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <a href="#booking" className="hidden md:inline-block bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-105">
            رزرو وقت مشاوره
          </a>
          <button 
            className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4 py-4 px-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking" 
                className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                رزرو وقت مشاوره
              </a>
            </nav>
          </div>
        )}
      </div>
      <style>{`
        @keyframes shimmer-glow {
          0% {
            background-position: 200% center;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4);
          }
          50% {
            text-shadow: 0 0 25px rgba(0, 0, 0, 1), 0 0 40px rgba(0, 0, 0, 0.8);
          }
          100% {
            background-position: -200% center;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.4);
          }
        }
        .animate-shimmer-glow {
          animation: shimmer-glow 3s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
