import axios from 'axios';

// 🔽🔽🔽 این خط اصلاح شد 🔽🔽🔽
const API_KEY = import.meta.env.VITE_GROQ_API_KEY as string;
// 🔼🔼🔼 This line was corrected 🔼🔼🔼

const BASE_URL = 'https://api.groq.com/openai';

export const getLegalAdvice = async (prompt: string): Promise<string> => {
  try {
    const systemInstruction = `شما یک دستیار حقوقی هوشمند برای وب‌سایت «غزاله تقوی، وکیل پایه یک دادگستری در همدان» هستید. وظیفه شما ارائه اطلاعات کلی و اولیه بر اساس قوانین ایران به زبان فارسی است. شما نباید مشاوره حقوقی قطعی ارائه دهید. همیشه در پایان پاسخ خود، کاربر را به شدت تشویق کنید که برای بررسی دقیق پرونده و دریافت راهکار حقوقی مشخص، حتماً یک جلسه مشاوره رسمی با خانم تقوی رزرو کند. هرگز خود را به عنوان یک وکیل واقعی معرفی نکنید، بلکه یک دستیار هوشمند هستید.`;

    const response = await axios.post(`${BASE_URL}/v1/chat/completions`, {
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });


    if (!response.data.choices || !response.data.choices[0] || !response.data.choices[0].message || !response.data.choices[0].message.content) {
      console.error('Invalid Groq response structure:', response.data);
      return "متاسفانه در حال حاضر امکان برقراری ارتباط با دستیار هوشمند وجود ندارد. لطفاً بعداً دوباره تلاش کنید.";
    }

    let content = response.data.choices[0].message.content;
    const appendText = '\n\nبرای بررسی دقیق‌تر این موضوعات و دریافت راهکار حقوقی مشخص، حتماً یک جلسه مشاوره رسمی با خانم غزاله تقوی رزرو کنید.';
    if (!content.includes(appendText)) {
      content += appendText;
    }
    return content;
  } catch (error) {
      if (axios.isAxiosError(error)) {
        // Log error details for debugging, but not in production
      } else {
        // Log error details for debugging, but not in production
      }
    return "متاسفانه در حال حاضر امکان برقراری ارتباط با دستیار هوشمند وجود ندارد. لطفاً بعداً دوباره تلاش کنید.";
  }
};
