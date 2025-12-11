import { StrategyResult } from "../types";

export const analyzeBusinessCase = async (problemStatement: string): Promise<StrategyResult> => {
  const modelId = "gemini-2.5-flash"; 

  const prompt = `
    You are a Lead Automation Architect at MDORA AI, an agency specializing in n8n workflows, Voice AI, and CRM automation.
    Analyze the following business bottleneck provided by a client: "${problemStatement}".
    
    Provide a technical, automation-focused response.
    1. Analysis: A strict diagnosis of the manual inefficiency.
    2. Protocol: 3 concrete steps using specific tools (e.g., "Use n8n to webhook leads...", "Deploy Vapi.ai for calls...", "Sync to HubSpot").
    3. Impact: The measurable efficiency gain (time saved or revenue increased).
    
    Tone: Technical, precise, authoritative, high-end.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "Diagnosis of the inefficiency" },
            steps: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 technical steps mentioning n8n, CRM, or Voice AI" 
            },
            impact: { type: Type.STRING, description: "Calculated ROI or hours saved" }
          },
          required: ["analysis", "steps", "impact"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const result = JSON.parse(text) as StrategyResult;
    return result;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      analysis: "Unable to process specific parameters at this moment due to high demand.",
      steps: [
        "Implement n8n webhook listeners for immediate data capture.",
        "Deploy a Retell AI voice agent for qualification.",
        "Automate CRM status updates based on call sentiment."
      ],
      impact: "Estimated 40% reduction in manual data entry."
    };
  }
};