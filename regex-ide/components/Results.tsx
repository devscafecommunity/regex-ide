import React from 'react';

interface ResultsProps {
  regex: string;
  flags: string;
  testText: string;
}

const Results: React.FC<ResultsProps> = ({ regex, flags, testText }) => {
  let matches: RegExpMatchArray[] = [];
  let error = '';
  
  try {
    if (regex) {
      const regExp = new RegExp(regex, flags);
      matches = Array.from(testText.matchAll(regExp));
    }
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Resultados</h2>
      
      {error ? (
        <div className="p-3 bg-red-900/50 text-red-300 rounded-lg">
          <strong>Erro na regex:</strong> {error}
        </div>
      ) : matches.length > 0 ? (
        <div className="space-y-3">
          <div className="text-sm text-gray-400">
            {matches.length} match{matches.length !== 1 ? 'es' : ''} encontrado{matches.length !== 1 ? 's' : ''}
          </div>
          
          <div className="border border-gray-700 rounded-lg overflow-hidden">
            {matches.map((match, index) => (
              <div key={index} className="border-b border-gray-700 last:border-b-0">
                <div className="p-3 bg-gray-750">
                  <span className="font-mono bg-green-900/50 px-2 py-1 rounded">
                    {match[0]}
                  </span>
                  <span className="text-sm text-gray-400 ml-2">
                    (posição: {match.index})
                  </span>
                </div>
                
                {match.length > 1 && (
                  <div className="p-3 bg-gray-850 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[...match].slice(1).map((group, groupIndex) => (
                      <div key={groupIndex} className="text-sm">
                        <span className="text-amber-300">Grupo {groupIndex}:</span>
                        <span className="ml-2 font-mono bg-amber-900/30 px-2 py-1 rounded">
                          {group || '<vazio>'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500 bg-gray-850 rounded-lg">
          Nenhum match encontrado
        </div>
      )}
    </div>
  );
};

export default Results;