import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppContent } from './types';
import { INITIAL_CONTENT } from './constants';

interface ContentContextType {
  content: AppContent;
  updateContent: (newContent: AppContent) => void;
  isAdmin: boolean;
  enableAdmin: () => void;
  disableAdmin: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<AppContent>(INITIAL_CONTENT);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('portfolio_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse content from local storage", e);
      }
    }
  }, []);

  const updateContent = (newContent: AppContent) => {
    setContent(newContent);
    localStorage.setItem('portfolio_content', JSON.stringify(newContent));
  };

  const enableAdmin = () => setIsAdmin(true);
  const disableAdmin = () => setIsAdmin(false);

  return (
    <ContentContext.Provider value={{ content, updateContent, isAdmin, enableAdmin, disableAdmin }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};