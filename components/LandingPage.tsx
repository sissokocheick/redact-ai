import React from 'react';
import { PenTool, Send, FileText, Check, Loader2 } from './Icons';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center animate-in fade-in duration-700">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Nouvelle Version IA 2.5
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Vos courriers, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            rédigés en un clic.
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Fini le syndrome de la page blanche. Transformez quelques mots en emails professionnels, lettres de motivation et courriers administratifs parfaits.
        </p>
        
        <button 
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white text-lg font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-1"
        >
          Commencer à rédiger
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Floating UI Mockup */}
        <div className="mt-16 relative w-full max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 h-full w-full"></div>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 text-left relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-3 opacity-50 blur-[1px]">
              <div className="h-4 bg-slate-100 rounded w-1/3"></div>
              <div className="h-4 bg-slate-100 rounded w-full"></div>
              <div className="h-4 bg-slate-100 rounded w-full"></div>
              <div className="h-4 bg-slate-100 rounded w-5/6"></div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <PenTool className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="space-y-2 flex-1">
                        <p className="text-indigo-900 font-medium text-lg">
                            "Je vous écris concernant ma facture internet du mois de mars..."
                        </p>
                        <p className="text-sm text-slate-400">Généré instantanément par l'IA</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-white py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-10">
                
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tous types de documents</h3>
                    <p className="text-slate-600">Lettres de motivation, réclamations, résiliations... Sélectionnez simplement votre besoin.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                        <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Français Impeccable</h3>
                    <p className="text-slate-600">Fini les fautes d'orthographe et les tournures maladroites. Obtenez un résultat professionnel.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                        <Loader2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ultra Rapide</h3>
                    <p className="text-slate-600">Donnez quelques points clés en vrac, l'IA structure et rédige le tout en quelques secondes.</p>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;