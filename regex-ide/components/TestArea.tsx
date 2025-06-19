import React from 'react';

interface TestAreaProps {
  testText: string;
  setTestText: (text: string) => void;
}

const TestArea: React.FC<TestAreaProps> = ({ testText, setTestText }) => {
  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg">
      <label className="block text-sm font-medium mb-2">
        Texto de Teste:
      </label>
      <textarea
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
        className="w-full h-40 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono text-sm"
        placeholder="Insira o texto para testar sua regex..."
      />
    </div>
  );
};

export default TestArea;