
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/pic.png" 
                alt="غزاله تقوی" 
                className="rounded-xl w-64 h-auto object-contain mx-auto block transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">درباره من</h2>
            <p className="text-base text-gray-600 mb-2 leading-snug transition-colors duration-300 hover:text-gray-800">
              من غزاله تقوی‌ام، وکیل پایه یک دادگستری در همدان. وکالت برام فقط کار نیست، یه راه قشنگه برای کمک به آدما و کنارشون بودن. خیلی خوشحالم که می‌تونم صدای مردم رو بشنوم و برای عدالت قدم بردارم.
            </p>
            <p className="text-base text-gray-600 mb-2 leading-snug transition-colors duration-300 hover:text-gray-800">
              فکر می‌کنم هر پرونده فقط قانون و مدرک نیست، پشتش یه آدم با نگرانی‌ها و آرزوهاشه. می‌خوام براتون نه فقط وکیل، بلکه یه دوست و پشتیبان باشم که تو سختی‌ها تنهاتون نذاره.
            </p>
            <p className="text-base text-gray-600 mb-4 leading-snug transition-colors duration-300 hover:text-gray-800">
              اعتمادتون برام خیلی مهمه. با تمام وجودم، با صداقت و عشق به کارم، سعی می‌کنم این اعتماد رو حفظ کنم و با هم امید و آرامش بسازیم.
            </p>
            <a href="#booking" className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-105 inline-block">
              تماس و رزرو وقت
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
