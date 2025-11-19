import React from 'react';
import { DocumentType, DocumentTone, GenerationRequest } from '../types';
import { Send, Loader2 } from './Icons';

interface InputFormProps {
  formData: GenerationRequest;
  setFormData: React.Dispatch<React.SetStateAction<GenerationRequest>>;
  onSubmit: () => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ formData, setFormData, onSubmit, isLoading }) => {
  
  const handleChange = (field: keyof GenerationRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.context.trim().length > 5;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="space-y-6">
        
        {/* Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Type de document
          </label>
          <div className="relative">
            <select
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value as DocumentType)}
              className="w-full appearance-none bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-3 pr-10 transition-shadow"
              disabled={isLoading}
            >
              {Object.values(DocumentType).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Tone Selection */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Ton désiré
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.values(DocumentTone).map((tone) => (
              <button
                key={tone}
                onClick={() => handleChange('tone', tone)}
                disabled={isLoading}
                className={`p-3 text-sm rounded-xl border text-left transition-all ${
                  formData.tone === tone
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700 font-medium ring-1 ring-indigo-500'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        {/* Context Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Points clés / Contexte
            <span className="ml-2 font-normal text-slate-400 text-xs">(Donnez des détails en vrac)</span>
          </label>
          <textarea
            value={formData.context}
            onChange={(e) => handleChange('context', e.target.value)}
            disabled={isLoading}
            placeholder="Ex: Je n'ai pas internet depuis 3 jours. Je veux un remboursement. Je suis client depuis 10 ans..."
            className="w-full h-32 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-4 resize-none transition-shadow"
          />
        </div>

        {/* Action Button */}
        <button
          onClick={onSubmit}
          disabled={isLoading || !isFormValid}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-lg transition-all transform active:scale-[0.98] ${
            isLoading || !isFormValid
              ? 'bg-slate-300 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Rédaction en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Générer mon texte
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InputForm;