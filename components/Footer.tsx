
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, GavelIcon, ShieldCheckIcon, BriefcaseIcon, UserIcon, CalendarIcon, ChatBubbleLeftRightIcon, TelegramIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-4">غزاله تقوی | وکیل پایه یک ش.پ: ۷۰۱۶۳</h3>
            <p className="text-lg font-bold text-gray-300 mb-4">میانجیگر رسمی قوه قضائیه / ش.پ: ۳۹۰۱۰۰۲۱</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">راه‌های ارتباطی</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:rotate-[-2deg] hover:shadow-lg rounded p-2 group">
                <MapPinIcon className="transition-transform duration-300 group-hover:rotate-12" />
                <span className="mr-3">همدان برج آریان، طبقه ۱۲ واحد ۴</span>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:rotate-[-2deg] hover:shadow-lg rounded p-2 group">
                <PhoneIcon className="transition-transform duration-300 group-hover:rotate-12" />
                <span className="mr-3" dir="ltr">۰۹۱۸۲۳۰۸۲۹۰</span>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:rotate-[-2deg] hover:shadow-lg rounded p-2 group">
                <EnvelopeIcon className="transition-transform duration-300 group-hover:rotate-12" />
                <a href="mailto:info@taghavilaw.com" className="mr-3">info@taghavilaw.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:rotate-[-2deg] hover:shadow-lg rounded p-2 group">
                <TelegramIcon className="transition-transform duration-300 group-hover:rotate-12 text-blue-400" />
                <a href="https://t.me/ghazalehtaghavi" target="_blank" rel="noopener noreferrer" className="mr-3">t.me/ghazalehtaghavi</a>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:rotate-[-2deg] hover:shadow-lg rounded p-2 group">
                <InstagramIcon className="transition-transform duration-300 group-hover:rotate-12 text-pink-400" />
                <a href="https://www.instagram.com/ghazalehtaghavi" target="_blank" rel="noopener noreferrer" className="mr-3">instagram.com/ghazalehtaghavi</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:shadow-lg rounded p-2 group">
                <BriefcaseIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <a href="#services" className="text-gray-300 hover:text-white">خدمات</a>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:shadow-lg rounded p-2 group">
                <UserIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <a href="#about" className="text-gray-300 hover:text-white">درباره من</a>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:shadow-lg rounded p-2 group">
                <CalendarIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <a href="#booking" className="text-gray-300 hover:text-white">رزرو وقت</a>
              </li>
              <li className="flex items-center justify-center md:justify-start transition-all duration-300 hover:scale-105 hover:shadow-lg rounded p-2 group">
                <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <a href="#faq" className="text-gray-300 hover:text-white">سوالات متداول</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full">
          <h3 className="text-xl font-bold mb-4 text-center">موقعیت دفتر ما</h3>
          <div className="relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.0!2d48.514!3d34.799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2YXYp9mE2KfZhNin2YTYp9mE2KfZhNiq2YE!5e0!3m2!1sfa!2sir!4v1727600000000!5m2!1sfa!2sir"
              width="100%"
              height="200"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full transition-transform duration-300 hover:scale-105"
            ></iframe>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} کلیه حقوق این وب‌سایت برای دفتر وکالت غزاله تقوی محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
