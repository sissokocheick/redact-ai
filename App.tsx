import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import InputForm from './components/InputForm';
import ResultCard from './components/ResultCard';
import { DocumentType, DocumentTone, GenerationRequest } from './types';
import { generateDocument } from './services/geminiService';

const App: React.FC = () => {
  // State for navigation
  const [view, setView] = useState<'landing' | 'generator'>('landing');

  // State for logic
  const [formData, setFormData] = useState<GenerationRequest>({
    type: DocumentType.RECLAMATION,
    tone: DocumentTone.NEUTRE,
    context: '',
  });

  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setView('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!formData.context.trim()) return;

    setIsLoading(true);
    setError(null);
    
    try {
      const generatedText = await generateDocument(formData.type, formData.tone, formData.context);
      setResult(generatedText);
      
      // Scroll to result on mobile
      setTimeout(() => {
        const resultElement = document.getElementById('result-section');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

    } catch (err) {
      setError("Une erreur est survenue lors de la génération. Vérifiez votre connexion ou réessayez.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header onLogoClick={handleGoHome} />

      <main className="flex-grow">
        
        {view === 'landing' ? (
          <LandingPage onStart={handleStart} />
        ) : (
          <div className="container mx-auto px-4 py-8 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="space-y-8">
              
              {/* Generator Intro */}
              {!result && (
                <div className="text-center space-y-2 mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">À vous de jouer.</h2>
                  <p className="text-slate-600 text-lg">
                    Décrivez votre situation, l'IA s'occupe de la forme.
                  </p>
                </div>
              )}

              {/* Input Section */}
              <section className={`${result ? 'hidden md:block opacity-60 pointer-events-none blur-[1px] transition-all' : ''}`}>
                <InputForm 
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                />
              </section>

              {/* Error Feedback */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-2 animate-pulse">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {error}
                </div>
              )}

              {/* Result Section */}
              {result && (
                <section id="result-section" className="pt-4">
                   <ResultCard 
                     content={result} 
                     onContentChange={(text) => setResult(text)}
                     onReset={handleReset} 
                   />
                </section>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Propulsé par Google Gemini • Fait avec ❤️ pour vous simplifier la vie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;