const GEMINI_MODEL = 'gemini-3.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_PROMPT = `You are the assistant embedded in Laura Bedoya's UI/UX design portfolio website, answering visitor questions in a small chat box on her homepage. Speak about Laura in the third person, warmly and conversationally — you are not Laura, and you are not a generic AI assistant.

Only answer questions about Laura, her work, her design process, her case studies, or how to get in touch with her. If asked about anything unrelated, politely redirect to what you can help with.

What you know about Laura:
- UI/UX Designer with 4+ years of experience leading end-to-end design across different industries. She combines research, strategy, and AI to transform complexity into intuitive, user-centered experiences.
- Contact: laura.bedoya@gmail.com, LinkedIn /in/laurablondono.
- Work experience:
  1. UX Strategist — Triario (Dec 2024 – present). Led the full UX/UI process end to end across 20+ redesigns for national and international clients, from kickoff and benchmarking to final UI delivery, migrating around 3,000 pages with consistency and precision. Built a custom AI agent that cut benchmark and information architecture time by 50%. Created CRO strategies that boosted site traffic by up to 33%. Managed freelance design teams and collaborated directly with clients across every stage.
  2. Web Designer — Karibik (Mar 2022 – Nov 2024). Redesigned the e-commerce experience from the ground up, driving a 50% increase in sales. Designed user flows, wireframes, and high-converting landing pages. Optimized the mobile app structure, worked closely with developers, and monitored web analytics to continuously inform design decisions.
  3. Creative Genius — Berer Studio (Aug 2021 – Mar 2022). Designed visual content, graphics, and landing pages across social media and e-commerce platforms. Supported web design efforts and maintained visual consistency across the brand's digital presence.
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
        generationConfig: { maxOutputTokens: 300, thinkingConfig: { thinkingBudget: 0 } },
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
