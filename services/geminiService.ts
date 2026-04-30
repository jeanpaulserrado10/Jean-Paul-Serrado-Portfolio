import { GoogleGenAI } from "@google/genai";

// Ensure API key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateMarketingStrategy = async (topic: string, mode: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("Missing API Key");
  }

  let toneInstruction = "";
  if (mode === "Deep Authority") {
    toneInstruction = "Prioritize educational, high-trust, and technical depth. Focus on E-E-A-T.";
  } else {
    // Default to Viral Reach
    toneInstruction = "Prioritize high-engagement, shareable, and controversial angles. Focus on attention retention.";
  }

  const prompt = `Act as a world-class SEO & Content Strategist. The user has provided the following topic or business niche: "${topic}". 
  Strategy Mode: ${mode}.
  
  Generate a "Content Dominator" Roadmap.
  
  Use this exact schema:
  {
    "pillarTitle": "A high-volume, click-worthy Main Article/Pillar Page Title",
    "clusterTopics": "List 3 specific sub-topics or questions to cover that support the main pillar (comma separated)",
    "videoHook": "A specific visual hook and script opener for a Short/Reel (max 2 sentences)",
    "technicalFocus": "One specific technical SEO action to prioritize for this niche (e.g., Schema, Site Speed, Local Map Pack)"
  }
  
  Keep the tone professional yet aggressive on results. Focus on modern SEO practices (User Intent, Semantic Search).
  ${toneInstruction}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });
    
    return response.text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};