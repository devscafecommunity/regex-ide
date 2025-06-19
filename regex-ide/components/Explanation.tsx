import React from 'react';
import { explainRegexPart } from '../utils/regexUtils';

interface ExplanationProps {
  regex: string;
}

const Explanation: React.FC<ExplanationProps> = ({ regex }) => {
  const explanations = regex ? explainRegexPart(regex) : [];

  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Explicação da Regex</h2>
      
      {regex ? (
        <div className="space-y-2">
          {explanations.map((exp, index) => (
            <div 
              key={index} 
              className="p-3 bg-gray-750 rounded-lg flex items-start"
            >
              <div className="mr-3 mt-1 w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-sm">
                {index + 1}
              </div>
              <div>
                <code className="font-mono bg-gray-900 px-2 py-1 rounded text-amber-300">
                  {exp.part}
                </code>
                <div className="mt-1 text-gray-300">{exp.explanation}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500 bg-gray-850 rounded-lg">
          Insira uma expressão regular para ver a explicação
        </div>
      )}
    </div>
  );
};

export default Explanation;