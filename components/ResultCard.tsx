import React, { useState } from 'react';
import { Copy, Check, RefreshCw, PenTool } from './Icons';

interface ResultCardProps {
  content: string;
  onContentChange: (text: string) => void;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ content, onContentChange, onReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      {/* Header */}
      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-indigo-900">Votre Brouillon</h2>
          <span className="text-[10px] uppercase tracking-wider font-bold bg-white text-indigo-600 px-2 py-0.5 rounded-full border border-indigo-100 flex items-center gap-1">
            <PenTool className="w-3 h-3" />
            Éditable
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors text-sm flex items-center gap-1"
            title="Générer un nouveau texte"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Nouveau</span>
          </button>
        </div>
      </div>
      
      {/* Editable Content Area */}
      <div className="flex-grow relative group">
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="w-full h-[500px] p-6 md:p-8 resize-y outline-none text-slate-700 leading-relaxed font-medium border-0 focus:ring-2 focus:ring-inset focus:ring-indigo-100 bg-transparent transition-shadow selection:bg-indigo-100"
          spellCheck={false}
          placeholder="Le texte généré apparaîtra ici..."
        />
        {/* Visual cue on hover/focus */}
        <div className="absolute top-2 right-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded">
          Cliquez pour modifier
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center flex-shrink-0">
        <div className="text-xs text-slate-400 hidden sm:block">
          {content.length} caractères
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm ${
            copied
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-white hover:border-indigo-300 hover:text-indigo-600'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copié !
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copier le texte
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;