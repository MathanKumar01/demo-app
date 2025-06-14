// /src/pages/api/recommend.js

import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const userInput = req.body.query;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000', // change this to your live site when deployed
        'X-Title': 'Library Book Recommendation'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that recommends books based on user interests.'
          },
          {
            role: 'user',
            content: `Can you recommend a book based on: ${userInput}?`
          }
        ]
      })
    });

    const result = await response.json();
    const aiReply = result.choices?.[0]?.message?.content;

    if (aiReply) {
      // 🔥 Store in Firestore
      await addDoc(collection(db, 'recommendations'), {
        userInput,
        aiResponse: aiReply,
        createdAt: serverTimestamp()
      });

      return res.status(200).json({ recommendation: aiReply });
    } else {
      return res.status(200).json({
        recommendation: '❗ No recommendation found. Try entering a genre or book title.'
      });
    }

  } catch (error) {
    console.error('❌ Firestore Save Error:', error);
    return res.status(500).json({ error: 'Something went wrong while generating or saving recommendation.' });
  }
}
