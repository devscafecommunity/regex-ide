// Footer component for Regex IDE
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RegExp IDE. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by the Dev&apos;s Cafe team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;