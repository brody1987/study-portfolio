import React, { useState } from 'react';
import { useContent } from '../ContentContext';
import { Lock, Unlock } from 'lucide-react';

const Footer: React.FC = () => {
  const { enableAdmin, isAdmin } = useContent();
  const [showInput, setShowInput] = useState(false);
  const [code, setCode] = useState('');

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '123456') {
      enableAdmin();
      setShowInput(false);
      setCode('');
      alert("Admin Mode Enabled! Look for the edit button.");
    } else {
      alert("Incorrect code.");
    }
  };

  return (
    <footer className="w-full py-8 text-center text-slate-600 text-sm bg-black flex flex-col justify-center items-center">
      <p>© {new Date().getFullYear()} Olivia Chen. All Rights Reserved.</p>
      
      <div className="mt-4 flex justify-center">
        {!isAdmin ? (
          !showInput ? (
            <button onClick={() => setShowInput(true)} className="opacity-20 hover:opacity-100 transition-opacity flex items-center gap-1 text-xs">
              <Lock size={12} /> Admin Access
            </button>
          ) : (
            <form onSubmit={handleCodeSubmit} className="flex gap-2 items-center">
              <input 
                type="password" 
                value={code} 
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter Code"
                className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:outline-none"
                autoFocus
              />
              <button type="submit" className="text-primary text-xs font-bold">Unlock</button>
            </form>
          )
        ) : (
            <div className="text-green-500 text-xs flex items-center gap-1">
                <Unlock size={12} /> Admin Mode Active
            </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;