import React, { useState } from 'react';
import { getLegalAdvice } from '../services/groqService';

const LegalAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('لطفاً سوال خود را وارد کنید.');
      return;
    }
    setError('');
    setIsLoading(true);
    setResponse('');

    try {
      console.log('Sending query to Groq:', query);
      const result = await getLegalAdvice(query);
      console.log('Received result from Groq:', result);
      if (result.startsWith('متاسفانه')) {
        throw new Error(result);
      }
      setResponse(result);
    } catch (err: any) {
      console.error('Error during API call:', err);
      setError(err.message || 'خطایی در ارتباط با سرویس رخ داد.');
    } finally {
      setIsLoading(false);
    }
  };

  const formattedResponse = response.split('\n').map((line, index) => {
    line = line.trim();
    const highlightText = 'برای بررسی دقیق‌تر این موضوعات و دریافت راهکار حقوقی مشخص، حتماً یک جلسه مشاوره رسمی با خانم غزاله تقوی رزرو کنید.';
    if (line.includes(highlightText)) {
      return <p key={index} className="text-lg text-blue-700 font-bold animate-pulse mb-4">{line}</p>;
    }
    if (line.startsWith('* ')) {
      return <li key={index} className="mb-2">{line.substring(2)}</li>;
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      return <h4 key={index} className="text-lg font-semibold my-3">{line.substring(2, line.length - 2)}</h4>;
    }
    return <p key={index} className="text-lg mb-4">{line}</p>;
  });

  return (
    <section id="assistant" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">مشاور حقوقی هوشمند</h2>
          <p className="mt-4 text-xl text-gray-600">
            سوال حقوقی خود را بپرسید و پاسخ اولیه دریافت کنید.
            <br />
            <span className="font-semibold text-red-600 animate-pulse">توجه: این پاسخ جایگزین مشاوره تخصصی با وکیل نیست.</span>
          </p>
          <div className="mt-4 w-24 h-1 bg-blue-700 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              placeholder="سوال حقوقی خود را اینجا بنویسید..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
            ></textarea>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  در حال پردازش...
                </>
              ) : (
                'دریافت پاسخ'
              )}
            </button>
          </form>
          {response && (
            <div className="mt-8 p-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">پاسخ دستیار هوشمند:</h3>
              <div className="prose max-w-none text-gray-700 leading-loose text-right">
                {response.includes('* ') ? <ul>{formattedResponse}</ul> : <div>{formattedResponse}</div>}
              </div>
            </div>
          )}
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 text-center rounded-lg">
            <p className="text-base font-semibold animate-pulse">برای استفاده بهتر و بهینه تر از دستیار هوشمند لطفا فیلتر شکن خود را روشن کنید.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAssistant;
