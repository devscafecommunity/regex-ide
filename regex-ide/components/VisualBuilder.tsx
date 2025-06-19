import React from 'react';

interface VisualBuilderProps {
  addToRegex: (snippet: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const VisualBuilder: React.FC<VisualBuilderProps> = ({ 
  addToRegex, 
  undo, 
  redo,
  canUndo,
  canRedo
}) => {
  const categories = [
    {
      name: 'Básicos',
      items: [
        { name: 'Dígito', regex: '\\d', desc: 'Qualquer número (0-9)' },
        { name: 'Letra', regex: '[a-zA-Z]', desc: 'Qualquer letra' },
        { name: 'Espaço', regex: '\\s', desc: 'Qualquer espaço/tab' },
        { name: 'Palavra', regex: '\\w', desc: 'Letra, número ou _' },
        { name: 'Qualquer caract.', regex: '.', desc: 'Qualquer caractere (exceto \\n)' },
      ],
    },
    {
      name: 'Quantificadores',
      items: [
        { name: 'Um ou mais', regex: '+', desc: 'Ex: \\d+' },
        { name: 'Zero ou mais', regex: '*', desc: 'Ex: \\d*' },
        { name: 'Opcional', regex: '?', desc: 'Ex: \\d?' },
        { name: 'Intervalo exato', regex: '{n}', desc: 'Ex: \\d{3}' },
        { name: 'Intervalo customiz', regex: '{n,m}', desc: 'Ex: \\d{2,5}' },
      ],
    },
    {
      name: 'Grupos e Operações',
      items: [
        { name: 'Grupo', regex: '()', desc: 'Agrupa elementos' },
        { name: 'Alternativa', regex: '|', desc: '"ou" entre padrões' },
        { name: 'Conjunto', regex: '[]', desc: 'Qualquer um dos itens' },
        { name: 'Negado', regex: '[^]', desc: 'Nenhum dos itens' },
        { name: 'Início', regex: '^', desc: 'Início da string' },
        { name: 'Fim', regex: '$', desc: 'Fim da string' },
      ],
    },
  ];

  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Construtor Visual</h2>
        <div className="flex space-x-2">
          <button
            onClick={undo}
            disabled={!canUndo}
            className={`px-3 py-1 rounded ${canUndo ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
          >
            Desfazer
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className={`px-3 py-1 rounded ${canRedo ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
          >
            Refazer
          </button>
        </div>
      </div>
      
      {categories.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">{category.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {category.items.map((item) => (
              <button
                key={item.name}
                onClick={() => addToRegex(item.regex)}
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group relative"
                title={item.desc}
              >
                <span className="block font-medium">{item.name}</span>
                <span className="block text-sm text-gray-400 mt-1">{item.regex}</span>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisualBuilder;