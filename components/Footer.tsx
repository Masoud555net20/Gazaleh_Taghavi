import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './Icons';

const LinkedInIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.441-1.439-1.441z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-12 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 animate-gradient-x"></div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Main Title */}
        <div className="space-y-2">
          <h2 className="text-6xl md:text-8xl font-extrabold font-nastaliq text-white drop-shadow-2xl">
            غزاله تقوی
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            وکیل پایه یک دادگستری
          </p>
        </div>

        {/* Social and Contact Links */}
        <div className="space-y-6">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/ghazalehtaghavi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 animate-pulse"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="group-hover:animate-bounce" />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="https://www.threads.com/@taghavi_ghazaleh?xmt=AQF0fSI7VOfXewTjN584IqRXNl8CqQTiCvGRdwPzIOZX8tA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 animate-pulse"
              aria-label="Instagram"
            >
              <InstagramIcon className="group-hover:animate-bounce" />
              <div className="absolute inset-0 rounded-full bg-pink-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="https://t.me/ghazalehtaghavi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 animate-pulse"
              aria-label="Telegram"
            >
              <TelegramIcon className="group-hover:animate-bounce" />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-400 animate-pulse" />
                <span dir="ltr">۰۹۱۸۲۳۰۸۲۹۰</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 animate-pulse" />
                <a href="mailto:info@taghavilaw.com" className="hover:text-white transition-colors duration-300">info@taghavilaw.com</a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPinIcon className="w-5 h-5 text-gray-400 animate-pulse" />
              <span>همدان، برج آریان، طبقه ۱۲، واحد ۴</span>
            </div>
            <div className="w-full max-w-2xl mx-auto mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.83!2d48.5146!3d34.7990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8a5b0b0b0b0b0b%3A0x0!2zSGFtYWRhbiwgSXI!5e0!3m2!1sen!2sus!4v1690000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-sm text-gray-300 animate-fade-in">
          <p>&copy; {new Date().getFullYear()} غزاله تقوی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group-hover\\:animate-bounce:hover {
          animation: bounce 0.6s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
