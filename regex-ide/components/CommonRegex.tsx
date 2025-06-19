// // Este componente contém expressões regulares comuns que o usuário pode selecionar e inserir rapidamente na entrada de regex. Ele é útil para iniciantes que podem não conhecer todas as sintaxes de regex ou para usuários que desejam inserir padrões comuns sem digitar manualmente.
// import React from 'react';


// const CommonRegex = () => {
//   const commonPatterns = [
//     // Padrões básicos
//     { label: 'Dígito', regex: '\\d', tag: 'basic' },
//     { label: 'Letra', regex: '[a-zA-Z]', tag: 'basic' },
//     { label: 'Espaço', regex: '\\s', tag: 'basic' },
//     { label: 'Palavra', regex: '\\w', tag: 'basic' },
//     { label: 'Qualquer caractere', regex: '.', tag: 'basic' },
//     { label: 'Início da string', regex: '^', tag: 'basic' },
//     { label: 'Fim da string', regex: '$', tag: 'basic' },
//     { label: 'Grupo de captura', regex: '(...)', tag: 'basic' },
//     { label: 'Alternativa (ou)', regex: 'a|b', tag: 'basic' },
//     { label: 'Classe de caracteres', regex: '[abc]', tag: 'basic' },
//     { label: 'Negação de classe', regex: '[^abc]', tag: 'basic' },
//     { label: 'Um ou mais', regex: '+', tag: 'basic' },
//     { label: 'Zero ou mais', regex: '*', tag: 'basic' },
//     { label: 'Opcional', regex: '?', tag: 'basic' },
//     { label: 'Intervalo exato', regex: '{3}', tag: 'basic' },
//     { label: 'Intervalo personalizado', regex: '{2,5}', tag: 'basic' },
//     { label: 'Dígito não numérico', regex: '\\D', tag: 'basic' },
//     { label: 'Letra não alfanumérica', regex: '\\W', tag: 'basic' },
//     { label: 'Espaço não em branco', regex: '\\S', tag: 'basic' },
//     { label: 'Limite de palavra', regex: '\\b', tag: 'basic' },
//     { label: 'Não limite de palavra', regex: '\\B', tag: 'basic' },
//     { label: 'Escape de caractere', regex: '\\\\', tag: 'basic' },
//     { label: 'Caractere Unicode', regex: '\\uXXXX', tag: 'basic' },
//     { label: 'Caractere hexadecimal', regex: '\\xXX', tag: 'basic' },
//     { label: 'Caractere de nova linha', regex: '\\n', tag: 'basic' },
//     { label: 'Caractere de tabulação', regex: '\\t', tag: 'basic' },
//     { label: 'Caractere de retorno de carro', regex: '\\r', tag: 'basic' },
//     { label: 'Caractere de form feed', regex: '\\f', tag: 'basic' },
//     { label: 'Caractere de espaço vertical', regex: '\\v', tag: 'basic' },

//     // Padrões avançados
//     { label: 'Lookahead positivo', regex: '(?=...)', tag: 'advanced' },
//     { label: 'Lookahead negativo', regex: '(?!...)', tag: 'advanced' },
//     { label: 'Lookbehind positivo', regex: '(?<=...)', tag: 'advanced' },
//     { label: 'Lookbehind negativo', regex: '(?<!...)', tag: 'advanced' },
//     { label: 'Grupo nomeado', regex: '(?P<name>...)', tag: 'advanced' },
//     { label: 'Grupo de captura não capturante', regex: '(?:...)', tag: 'advanced' },
//     { label: 'Retrovisor (backreference)', regex: '\\1', tag: 'advanced' }, // Referência ao primeiro grupo capturado
//     { label: 'Retrovisor com nome', regex: '\\k<name>', tag: 'advanced' }, // Referência a grupo nomeado
//     { label: 'Quantificador possessivo', regex: '++', tag: 'advanced' }, // Exemplo: \\d++ para dígitos possessivos
//     { label: 'Quantificador relutante', regex: '+?', tag: 'advanced'  }, // Exemplo: \\d+? para dígitos relutantes
//     { label: 'Quantificador preguiçoso', regex: '*?', tag: 'advanced'  }, // Exemplo: \\d*? para dígitos preguiçosos
//     { label: 'Quantificador de intervalo preguiçoso', regex: '{2,5}?', tag: 'advanced'  }, // Exemplo: \\d{2,5}? para dígitos com intervalo preguiçoso
//     { label: 'Quantificador de intervalo possessivo', regex: '{2,5}++', tag: 'advanced'  }, // Exemplo: \\d{2,5}++ para dígitos com intervalo possessivo
//     { label: 'Quantificador de intervalo relutante', regex: '{2,5}*?', tag: 'advanced'  }, // Exemplo: \\d{2,5}*? para dígitos com intervalo relutante
//     { label: 'Quantificador de intervalo preguiçoso', regex: '{2,5}?', tag: 'advanced'  }, // Exemplo: \\d{2,5}? para dígitos com intervalo preguiçoso
//     { label: 'Quantificador de intervalo possessivo', regex: '{2,5}++', tag: 'advanced'  }, // Exemplo: \\d{2,5}++ para dígitos com intervalo possessivo

//     // Padrões de validação comuns
//     { label: 'Email', regex: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', tag: 'validation' },
//     { label: 'URL', regex: '(https?://)?[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/\\S*)?', tag: 'validation' },
//     { label: 'Número de telefone', regex: '\\(\\d{2}\\) \\d{4,5}-\\d{4}', tag: 'validation' },
//     { label: 'CEP', regex: '\\d{5}-?\\d{3}', tag: 'validation' },
//     { label: 'Data (DD/MM/AAAA)', regex: '(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}', tag: 'validation' },
//     { label: 'Hora (HH:MM)', regex: '([01][0-9]|2[0-3]):[0-5][0-9]', tag: 'validation' },
//     { label: 'CPF', regex: '\\d{3}\\.\\d{3}\\.\\d{3}-?\\d{2}', tag: 'validation' },
//     { label: 'CNPJ', regex: '\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-?\\d{2}', tag: 'validation' },
//     { label: 'Placa de veículo', regex: '[A-Z]{3}-\\d{4}', tag: 'validation' },
//     { label: 'Senha forte', regex: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}', tag: 'validation' },
//     { label: 'Número inteiro', regex: '-?\\d+', tag: 'validation' },
//     { label: 'Número decimal', regex: '-?\\d+\\.\\d+', tag: 'validation' },
//     { label: 'Hexadecimal', regex: '0[xX][0-9a-fA-F]+', tag: 'validation' },
//     { label: 'Código postal (EUA)', regex: '\\d{5}(-\\d{4})?', tag: 'validation' },
//     { label: 'IP (IPv4)', regex: '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)', tag: 'validation' },
//     { label: 'IP (IPv6)', regex: '([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)', tag: 'validation' },
//     { label: 'UUID', regex: '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}', tag: 'validation' },
//     { label: 'MD5', regex: '[a-fA-F0-9]{32}', tag: 'validation' },
//     { label: 'SHA1', regex: '[a-fA-F0-9]{40}', tag: 'validation' },
//     { label: 'SHA256', regex: '[a-fA-F0-9]{64}', tag: 'validation' },
//     { label: 'SHA512', regex: '[a-fA-F0-9]{128}', tag: 'validation' },
//     { label: 'Número romano', regex: 'M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})', tag: 'validation' },
//     { label: 'Código de barras EAN-13', regex: '\\d{13}', tag: 'validation' },
//     { label: 'Código de barras UPC', regex: '\\d{12}', tag: 'validation' },
//     { label: 'Número de cartão de crédito', regex: '\\b(?:\\d[ -]*?){13,16}\\b', tag: 'validation' },
//     { label: 'Número de conta bancária', regex: '\\d{4}-\\d{4}-\\d{4}-\\d{4}', tag: 'validation' },
//     { label: 'Número de seguro social (EUA)', regex: '\\d{3}-\\d{2}-\\d{4}', tag: 'validation' },
//     { label: 'Número de passaporte', regex: '[A-Z]{2}\\d{6,9}', tag: 'validation' },
//     { label: 'Código IBAN', regex: '[A-Z]{2}\\d{2}[A-Z0-9]{1,30}', tag: 'validation' },
//   ];

//   return (
//     <div className="my-6 p-4 bg-gray-800 rounded-lg">
//       {commonPatterns.map((pattern, index) => (
        

//       ))}
//     </div>
//   )
// };

// export default CommonRegex;


import React, { useState, useMemo } from 'react';

interface CommonPattern {
  label: string;
  regex: string;
  tag: string;
  description?: string;
}

const CommonRegex: React.FC<{ onSelect: (regex: string) => void }> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('all');

  const commonPatterns: CommonPattern[] = useMemo(() => [
    // Padrões básicos
    { label: 'Dígito', regex: '\\d', tag: 'basic', description: 'Qualquer dígito (0-9)' },
    { label: 'Letra', regex: '[a-zA-Z]', tag: 'basic', description: 'Qualquer letra maiúscula ou minúscula' },
    { label: 'Espaço', regex: '\\s', tag: 'basic', description: 'Qualquer espaço em branco (espaço, tab, quebra de linha)' },
    { label: 'Palavra', regex: '\\w', tag: 'basic', description: 'Caractere alfanumérico ou underscore [a-zA-Z0-9_]' },
    { label: 'Qualquer caractere', regex: '.', tag: 'basic', description: 'Qualquer caractere exceto quebra de linha' },
    { label: 'Início da string', regex: '^', tag: 'basic', description: 'Início da linha ou string' },
    { label: 'Fim da string', regex: '$', tag: 'basic', description: 'Fim da linha ou string' },
    { label: 'Grupo de captura', regex: '(...)', tag: 'basic', description: 'Captura um grupo para reutilização' },
    { label: 'Alternativa (ou)', regex: 'a|b', tag: 'basic', description: 'Corresponde a &quot;a&quot; ou &quot;b&quot;' },
    { label: 'Classe de caracteres', regex: '[abc]', tag: 'basic', description: 'Qualquer caractere entre colchetes' },
    { label: 'Negação de classe', regex: '[^abc]', tag: 'basic', description: 'Qualquer caractere EXCETO os especificados' },
    { label: 'Um ou mais', regex: '+', tag: 'basic', description: 'Uma ou mais ocorrências' },
    { label: 'Zero ou mais', regex: '*', tag: 'basic', description: 'Zero ou mais ocorrências' },
    { label: 'Opcional', regex: '?', tag: 'basic', description: 'Zero ou uma ocorrência' },
    { label: 'Intervalo exato', regex: '{3}', tag: 'basic', description: 'Exatamente 3 ocorrências' },
    { label: 'Intervalo personalizado', regex: '{2,5}', tag: 'basic', description: 'Entre 2 e 5 ocorrências' },
    { label: 'Dígito não numérico', regex: '\\D', tag: 'basic', description: 'Qualquer caractere que NÃO é dígito' },
    { label: 'Letra não alfanumérica', regex: '\\W', tag: 'basic', description: 'Qualquer caractere que NÃO é palavra' },
    { label: 'Espaço não em branco', regex: '\\S', tag: 'basic', description: 'Qualquer caractere que NÃO é espaço em branco' },
    { label: 'Limite de palavra', regex: '\\b', tag: 'basic', description: 'Limite entre palavra e não-palavra' },
    { label: 'Não limite de palavra', regex: '\\B', tag: 'basic', description: 'Oposto de \\b' },
    { label: 'Escape de caractere', regex: '\\\\', tag: 'basic', description: 'Escapa um caractere especial' },
    { label: 'Caractere Unicode', regex: '\\uXXXX', tag: 'basic', description: 'Caractere Unicode específico' },
    { label: 'Caractere hexadecimal', regex: '\\xXX', tag: 'basic', description: 'Caractere hexadecimal' },
    { label: 'Nova linha', regex: '\\n', tag: 'basic', description: 'Caractere de nova linha' },
    { label: 'Tabulação', regex: '\\t', tag: 'basic', description: 'Caractere de tabulação' },
    { label: 'Retorno de carro', regex: '\\r', tag: 'basic', description: 'Caractere de retorno de carro' },

    // Padrões avançados
    { label: 'Lookahead positivo', regex: '(?=...)', tag: 'advanced', description: 'Corresponde se seguido por padrão' },
    { label: 'Lookahead negativo', regex: '(?!...)', tag: 'advanced', description: 'Corresponde se NÃO seguido por padrão' },
    { label: 'Lookbehind positivo', regex: '(?<=...)', tag: 'advanced', description: 'Corresponde se precedido por padrão' },
    { label: 'Lookbehind negativo', regex: '(?<!...)', tag: 'advanced', description: 'Corresponde se NÃO precedido por padrão' },
    { label: 'Grupo nomeado', regex: '(?P<name>...)', tag: 'advanced', description: 'Captura grupo com nome específico' },
    { label: 'Grupo não capturante', regex: '(?:...)', tag: 'advanced', description: 'Agrupa sem capturar' },
    { label: 'Retrovisor', regex: '\\1', tag: 'advanced', description: 'Referência ao primeiro grupo capturado' },
    { label: 'Retrovisor nomeado', regex: '\\k<name>', tag: 'advanced', description: 'Referência a grupo nomeado' },
    { label: 'Quantificador possessivo', regex: '++', tag: 'advanced', description: 'Quantificador &quot;greedy&quot; sem backtrack' },

    // Padrões de validação comuns
    { label: 'Email', regex: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', tag: 'validation', description: 'Valida formato de email' },
    { label: 'URL', regex: '(https?://)?[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/\\S*)?', tag: 'validation', description: 'Valida URLs http/https' },
    { label: 'Telefone BR', regex: '\\(\\d{2}\\) \\d{4,5}-\\d{4}', tag: 'validation', description: '(XX) XXXX-XXXX ou (XX) XXXXX-XXXX' },
    { label: 'CEP', regex: '\\d{5}-?\\d{3}', tag: 'validation', description: 'Formato XXXXX-XXX ou XXXXXXXX' },
    { label: 'Data DD/MM/AAAA', regex: '(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}', tag: 'validation', description: 'Datas válidas de 01/01/1900 a 31/12/2099' },
    { label: 'CPF', regex: '\\d{3}\\.\\d{3}\\.\\d{3}-?\\d{2}', tag: 'validation', description: 'Formato XXX.XXX.XXX-XX' },
    { label: 'CNPJ', regex: '\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-?\\d{2}', tag: 'validation', description: 'Formato XX.XXX.XXX/XXXX-XX' },
    { label: 'Placa de veículo', regex: '[A-Z]{3}[0-9][A-Z0-9][0-9]{2}', tag: 'validation', description: 'Formato novo (Mercosul) e antigo' },
    { label: 'Senha forte', regex: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}', tag: 'validation', description: 'Mínimo 8 caracteres com maiúsculas, minúsculas, números e especiais' },
    { label: 'Número inteiro', regex: '-?\\d+', tag: 'validation', description: 'Inteiros positivos ou negativos' },
    { label: 'Número decimal', regex: '-?\\d+\\.\\d+', tag: 'validation', description: 'Decimais com ponto' },
    { label: 'Cartão de crédito', regex: '\\b(?:\\d[ -]*?){13,16}\\b', tag: 'validation', description: 'Formatos comuns de cartões' },
    { label: 'CPF ou CNPJ', regex: '(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2})|(\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2})', tag: 'validation', description: 'Aceita ambos formatos' },
    { label: 'IPv4', regex: '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)', tag: 'validation', description: 'Endereços IPv4 válidos' },
  ], []);

  const tags = ['all', 'basic', 'advanced', 'validation'];

  // Filtra padrões com base na pesquisa e tag selecionada
  const filteredPatterns = useMemo(() => {
    return commonPatterns.filter(pattern => {
      const matchesSearch = pattern.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           pattern.regex.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (pattern.description && pattern.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTag = activeTag === 'all' || pattern.tag === activeTag;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, activeTag, commonPatterns]);

  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Expressões Regulares Comuns</h2>
      
      {/* Barra de pesquisa */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar padrões..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
      
      {/* Filtros por tag */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeTag === tag 
                ? 'bg-sky-600 hover:bg-sky-700' 
                : 'bg-gray-700 hover:bg-gray-600'
            } transition-colors`}
          >
            {tag === 'all' ? 'Todas' : tag === 'basic' ? 'Básico' : tag === 'advanced' ? 'Avançado' : 'Validação'}
          </button>
        ))}
      </div>
      
      {/* Lista de padrões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredPatterns.length > 0 ? (
          filteredPatterns.map((pattern, index) => (
            <div 
              key={index}
              onClick={() => onSelect(pattern.regex)}
              className="p-3 bg-gray-750 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors group"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-100">{pattern.label}</h3>
                <span className="text-xs px-2 py-1 bg-gray-600 rounded-full capitalize">
                  {pattern.tag}
                </span>
              </div>
              
              <div className="mt-2 font-mono text-sm text-sky-400 break-all">
                {pattern.regex}
              </div>
              
              {pattern.description && (
                <div className="mt-2 text-xs text-gray-400">
                  {pattern.description}
                </div>
              )}
              
              <div className="mt-2 text-right">
                <button 
                  className="text-xs text-sky-500 hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(pattern.regex);
                  }}
                >
                  Inserir
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            Nenhum padrão encontrado para &quot;{searchTerm}&quot;
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonRegex;