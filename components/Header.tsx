import React from 'react';
import { PenTool } from './Icons';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          onClick={onLogoClick}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity select-none"
        >
          <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-200">
            <PenTool className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">Rédact'IA</h1>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide pt-0.5">Assistant de Rédaction</p>
          </div>
        </div>
        
        {/* Optional: Small CTA in header if we want, but keeping it clean for now */}
      </div>
    </header>
  );
};

export default Header;