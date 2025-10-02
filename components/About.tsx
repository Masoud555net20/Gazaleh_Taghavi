import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="about-img-wrap mx-auto">
                <img
                  src="/Pic.png"
                  alt="غزاله تقوی"
                  className="about-img w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto object-cover block rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">درباره من</h2>
            <p className="text-base text-gray-600 mb-2 leading-snug transition-colors duration-300 hover:text-gray-800">
              من غزاله تقوی‌ام، وکیل پایه یک دادگستری در همدان. برای من وکالت فقط یه شغل نیست، یه راهه برای کمک به آدم‌ها، برای شنیدن صدای کسانی که تو شرایط سخت زندگی به کمک نیاز دارن. تو این مسیر، من بیشتر از اینکه بخوام یه وکیل باشم، می‌خوام یه همراه و پشتیبان باشم که تو لحظات سخت کنارتون باشه.
            </p>
            <p className="text-base text-gray-600 mb-2 leading-snug transition-colors duration-300 hover:text-gray-800">
              هر پرونده‌ای که به دستم می‌رسه، برای من یه دنیای جدیده؛ دنیای آدم‌ها با دغدغه‌ها و آرزوهای خاص خودشون. این‌طور نیست که فقط به مدرک و قانون نگاه کنم. من با قلبم می‌خوام بفهمم که شما چی می‌خواهید و چطور می‌تونم براتون بهترین نتیجه رو رقم بزنم.
            </p>
            <p className="text-base text-gray-600 mb-4 leading-snug transition-colors duration-300 hover:text-gray-800">
              اعتماد شما برای من خیلی مهمه. من می‌دونم که وقتی به من اعتماد می‌کنید، شما نه تنها از من یه وکیل، بلکه یه انسان صادق و با دل پر از عشق به کارم می‌خواهید. با تمام وجودم، تمام تلاشم رو می‌کنم که این اعتماد رو حفظ کنم و تو سختی‌ها و چالش‌ها کنارتون باشم. من اینجا هستم تا در کنار هم، نه فقط به دنبال عدالت باشیم، بلکه لحظاتی پر از امید و آرامش بسازیم.
            </p>
            <a href="#booking" className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-transform duration-300 hover:scale-105 inline-block">
              تماس و رزرو وقت
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        /* About image modern styling */
        .about-img-wrap {
          position: relative;
          display: inline-block;
          border-radius: 9999px;
          transition: transform 300ms cubic-bezier(.2,.9,.2,1);
          will-change: transform;
          overflow: hidden;
          background: transparent;
        }
        .about-img {
          display: block;
          border-radius: 9999px;
          background: transparent;
          padding: 0;
          box-shadow: none;
          transition: filter 200ms ease, box-shadow 200ms ease, transform 200ms ease;
          border: none;
          /* continuous gentle motion (float + tiny rotate) */
          animation: float-slow 6s ease-in-out infinite;
          will-change: transform;
        }
        .about-img-wrap::after { content: none; }
        .about-img-wrap:hover {
          /* keep wrapper stable; no scale or movement that hides parts of the photo */
          transform: none;
        }
        .about-img:hover {
          /* keep image size unchanged on hover; add a subtle glow only */
          transform: translateZ(0);
          box-shadow: 0 22px 56px rgba(59,130,246,0.10);
          filter: none;
        }

        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0.0deg); }
          25% { transform: translateY(-6px) rotate(-0.4deg); }
          50% { transform: translateY(-10px) rotate(0.6deg); }
          75% { transform: translateY(-6px) rotate(-0.2deg); }
          100% { transform: translateY(0) rotate(0.0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-img { animation: none !important; transform: none !important; }
        }
        @media (max-width: 1024px) {
          .about-img { width: auto; /* Remove fixed small width, let Tailwind classes handle sizing */ }
        }
        @media (min-width: 1280px) {
          /* on very large screens allow a smaller inset so more of the photo shows */
          .about-img { clip-path: inset(4% round 50%); -webkit-clip-path: inset(4% round 50%); }
        }
        @media (min-width: 1024px) {
          /* shift image slightly left to sit closer to the text */
          .about-img-wrap { margin-left: -56px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-img-wrap, .about-img { transition: none !important; animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
