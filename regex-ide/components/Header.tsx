// Header component for Regex IDE
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-gray-100 py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">RegExp IDE</h1>
        <p className="mt-2 text-sm">
          Crie, teste e entenda expressões regulares com facilidade
        </p>
        {/* 
        Botão para visitar o website do Dev's Cafe (devscafe.org)
        */}
        <a 
          href="https://devscafe.org" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded"
        >
          Visite o Dev's Cafe
        </a>
        <div className="mt-2 text-xs text-gray-400">
          Um lugar para desenvolvedores e entusiastas de tecnologia.
        </div>
        </div>
    </header>
  );
};

export default Header;