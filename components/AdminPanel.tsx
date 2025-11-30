import React, { useState } from 'react';
import { useContent } from '../ContentContext';
import { AppContent, SectionKey } from '../types';
import { X, Save, Edit3, Image as ImageIcon } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { content, updateContent, isAdmin, disableAdmin } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [editForm, setEditForm] = useState<AppContent>(content);
  const [activeTab, setActiveTab] = useState<SectionKey>('hero');

  if (!isAdmin) return null;

  const handleSave = () => {
    updateContent(editForm);
    setIsOpen(false);
  };

  const handleChange = (section: SectionKey, field: string, value: any) => {
    setEditForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Helper for deep nested array updates (simplified for this demo)
  const handleArrayChange = (section: SectionKey, arrayName: string, index: number, field: string, value: any) => {
    const prevSection = editForm[section] as any;
    const newArray = [...prevSection[arrayName]];
    newArray[index] = { ...newArray[index], [field]: value };
    
    setEditForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayName]: newArray
      }
    }));
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => { setEditForm(content); setIsOpen(true); }}
        className="fixed bottom-20 right-8 z-[100] bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 animate-bounce transition-all"
      >
        <Edit3 size={20} />
        <span className="font-bold">Edit Content</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[101] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col border border-slate-700">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
             <Edit3 className="text-primary" /> Admin Editor
          </h2>
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white px-4 py-2">Cancel</button>
            <button 
              onClick={handleSave}
              className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700 overflow-x-auto">
          {(Object.keys(content) as SectionKey[]).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-4 font-medium text-sm uppercase tracking-wider whitespace-nowrap ${activeTab === key ? 'text-primary border-b-2 border-primary bg-slate-800' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-8">
            <div className="grid grid-cols-1 gap-6">
                
                {/* Dynamic Form Generation based on Active Tab */}
                {Object.entries(editForm[activeTab]).map(([key, value]) => {
                    if (Array.isArray(value)) {
                        return (
                            <div key={key} className="col-span-1 space-y-4 border-t border-slate-700 pt-6">
                                <h3 className="text-lg font-bold text-white capitalize">{key} Items</h3>
                                {value.map((item, idx) => (
                                    <div key={idx} className="p-4 bg-slate-800 rounded-lg space-y-3">
                                        <div className="font-mono text-xs text-slate-500 mb-2">Item #{idx + 1}</div>
                                        {Object.entries(item).map(([subKey, subValue]) => (
                                            <div key={subKey}>
                                                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">{subKey}</label>
                                                 <input 
                                                    type={typeof subValue === 'number' ? 'number' : 'text'}
                                                    value={subValue as string | number}
                                                    onChange={(e) => handleArrayChange(activeTab, key, idx, subKey, e.target.value)}
                                                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:border-primary focus:outline-none"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )
                    }

                    if (typeof value === 'string') {
                         return (
                            <div key={key}>
                                <label className="block text-sm font-semibold text-slate-300 uppercase mb-2 flex items-center gap-2">
                                    {key.includes('Image') && <ImageIcon size={14} />}
                                    {key}
                                </label>
                                {value.length > 100 && !key.includes('Image') ? (
                                    <textarea
                                        value={value}
                                        onChange={(e) => handleChange(activeTab, key, e.target.value)}
                                        rows={4}
                                        className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange(activeTab, key, e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                                    />
                                )}
                            </div>
                        );
                    }
                    return null;
                })}

            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;