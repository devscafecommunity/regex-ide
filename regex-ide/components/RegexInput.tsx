import React from 'react';

interface RegexInputProps {
  regex: string;
  setRegex: (regex: string) => void;
  flags: string;
  setFlags: (flags: string) => void;
}

const RegexInput: React.FC<RegexInputProps> = ({ 
  regex, 
  setRegex, 
  flags, 
  setFlags 
}) => {
  const flagOptions = [
    { id: 'g', label: 'Global (g)' },
    { id: 'i', label: 'Case-insensitive (i)' },
    { id: 'm', label: 'Multilinha (m)' },
  ];

  const toggleFlag = (flag: string) => {
    if (flags.includes(flag)) {
      setFlags(flags.replace(flag, ''));
    } else {
      setFlags(flags + flag);
    }
  };

  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-grow">
          <label className="block text-sm font-medium mb-2">Expressão Regular:</label>
          <input
            type="text"
            value={regex}
            onChange={(e) => setRegex(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="/exemplo/"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Flags:</label>
          <div className="flex space-x-2">
            {flagOptions.map((flag) => (
              <button
                key={flag.id}
                type="button"
                onClick={() => toggleFlag(flag.id)}
                className={`px-4 py-2 rounded-lg ${
                  flags.includes(flag.id) 
                    ? 'bg-sky-600 hover:bg-sky-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                } transition-colors`}
              >
                {flag.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-850 rounded-lg">
        <div className="text-sm font-mono">
          <span className="text-green-400">/</span>
          <span className="text-yellow-200">{regex || ' '}</span>
          <span className="text-green-400">/</span>
          <span className="text-cyan-300">{flags}</span>
        </div>
      </div>
    </div>
  );
};

export default RegexInput;