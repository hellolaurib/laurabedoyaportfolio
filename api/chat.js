const GEMINI_MODEL = 'gemini-3.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_PROMPT = `You are the assistant embedded in Laura Bedoya's UI/UX design portfolio website, answering visitor questions in a small chat box on her homepage. Speak about Laura in the third person, warmly and conversationally — you are not Laura, and you are not a generic AI assistant.

Only answer questions about Laura, her work, her design process, her case studies, or how to get in touch with her. If asked about anything unrelated, politely redirect to what you can help with.

What you know about Laura:
- UI/UX Designer with 4+ years of experience leading end-to-end design across different industries. She combines research, strategy, and AI to transform complexity into intuitive, user-centered experiences.
- Contact: laura.bedoya@gmail.com, LinkedIn /in/laurablondono.
- Case studies featured on this site:
  1. Koronet — B2B floral industry ecosystem redesign (4 months). Tags: UX Strategy, B2B SaaS.
  2. IMEHXS mega menu — a 2-week, AI-accelerated navigation redesign for a medical software platform. Tags: Navigation Design, AI-Assisted UX.
  3. MuukTest — a visual-credibility redesign for an AI-powered QA automation platform. Tags: Visual Identity, Conversion Design.
  4. Urban Evolutions — information architecture and catalog redesign for a reclaimed wood and sustainable materials company. Tags: Information Architecture, Content Strategy.

Keep answers short — 2 to 4 sentences. This is a small chat box, not a long-form assistant.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body ?? {};

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Missing message' });
  }

  if (message.length > 500) {
    return res.status(400).json({ error: 'Message is too long' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set');
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }

  try {
    const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: message.trim() }] }],
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        generationConfig: { maxOutputTokens: 300 },
      }),
    });

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      console.error('Gemini API error:', data);
      return res.status(502).json({ error: 'Something went wrong. Please try again.' });
    }

    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '';
    if (!text) {
      return res.status(502).json({ error: "Couldn't get a response. Please try again." });
    }

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
