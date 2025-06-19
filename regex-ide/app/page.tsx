"use client";

import React, { useState } from 'react';
// import RegexInput from './components/Regex';
// import VisualBuilder from './components/VisualBuilder';
// import TestArea from './components/TestArea';
// import Results from './components/Results';
// import Explanation from './components/Explanation';
// import Footer from './components/Footer';

import RegexInput from '../components/RegexInput';
import VisualBuilder from '../components/VisualBuilder';
import TestArea from '../components/TestArea';
import Results from '../components/Results';
import Explanation from '../components/Explanation';
import CommonRegex from '@/components/CommonRegex';
import Footer from '../components/Footer';
import Header from '@/components/Header';

const App: React.FC = () => {
  const [regex, setRegex] = useState<string>('');
  const [flags, setFlags] = useState<string>('gi');
  const [testText, setTestText] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const addToRegex = (snippet: string) => {
    const newRegex = regex + snippet;
    setRegex(newRegex);
    
    // Atualizar histórico
    const newHistory = [...history.slice(0, historyIndex + 1), newRegex];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setRegex(history[prevIndex]);
      setHistoryIndex(prevIndex);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setRegex(history[nextIndex]);
      setHistoryIndex(nextIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <main className="container mx-auto px-4 flex-grow">
        <Header />
        
        <RegexInput 
          regex={regex} 
          setRegex={setRegex} 
          flags={flags} 
          setFlags={setFlags} 
        />
        
        <VisualBuilder 
          addToRegex={addToRegex} 
          undo={undo} 
          redo={redo}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
        />
        
        <TestArea 
          testText={testText} 
          setTestText={setTestText} 
        />
        
        <Results 
          regex={regex} 
          flags={flags} 
          testText={testText} 
        />
        
        <Explanation regex={regex} />

        <CommonRegex onSelect={addToRegex} />

        <Footer />
      </main>
    </div>
  );
};

export default App;