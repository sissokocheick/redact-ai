import { GoogleGenAI } from "@google/genai";
import { DocumentType, DocumentTone } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is missing from environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDocument = async (
  type: DocumentType,
  tone: DocumentTone,
  context: string
): Promise<string> => {
  const ai = getClient();
  
  const systemInstruction = `
    Tu es un expert en communication administrative et professionnelle française. 
    Ta mission est de rédiger des emails ou des lettres parfaitement structurés.
    
    Règles à suivre :
    1. La langue doit être un Français impeccable (orthographe et grammaire parfaites).
    2. Respecte scrupuleusement le ton demandé.
    3. Structure le texte avec un Objet clair (si c'est un email), une formule de politesse d'ouverture, le corps du message, et une formule de politesse de fermeture adaptée.
    4. Utilise les "Points clés" fournis par l'utilisateur pour construire l'argumentaire. Ne l'invente pas, mais étoffe-le pour qu'il soit fluide.
    5. Si des informations manquent (comme un numéro de dossier), utilise des crochets comme [Numéro de dossier] pour que l'utilisateur puisse remplir.
  `;

  const prompt = `
    Tâche : Rédige un(e) ${type}.
    Ton : ${tone}.
    Points clés du contexte fournis par l'utilisateur : "${context}".
    
    Génère le texte final prêt à l'emploi.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Balance between creativity and structure
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer le texte. Veuillez réessayer.";
  } catch (error) {
    console.error("Erreur lors de la génération :", error);
    throw new Error("Impossible de contacter l'assistant de rédaction.");
  }
};