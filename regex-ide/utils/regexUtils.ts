interface Explanation {
  part: string;
  explanation: string;
}

export const explainRegexPart = (regex: string): Explanation[] => {
  // Esta é uma implementação simplificada
  // Em uma aplicação real, usaríamos uma biblioteca ou parser mais sofisticado
  const explanations: Explanation[] = [];
  let buffer = '';
  let inGroup = false;
  let inCharClass = false;

  for (let i = 0; i < regex.length; i++) {
    const char = regex[i];
    
    switch (char) {
      case '\\':
        if (regex[i + 1]) {
          const nextChar = regex[++i];
          const sequence = `\\${nextChar}`;
          explanations.push({
            part: sequence,
            explanation: getEscapeSequenceExplanation(nextChar)
          });
        }
        break;
        
      case '[':
        inCharClass = true;
        buffer = char;
        break;
        
      case ']':
        inCharClass = false;
        buffer += char;
        explanations.push({
          part: buffer,
          explanation: 'Classe de caracteres: ' + 
            (buffer.includes('^') ? 'qualquer caractere exceto os listados' : 'qualquer caractere listado')
        });
        buffer = '';
        break;
        
      case '(':
        inGroup = true;
        explanations.push({
          part: char,
          explanation: 'Início de grupo de captura'
        });
        break;
        
      case ')':
        inGroup = false;
        explanations.push({
          part: char,
          explanation: 'Fim de grupo de captura'
        });
        break;
        
      case '{':
        let quantifier = char;
        while (regex[i] !== '}' && i < regex.length) {
          i++;
          quantifier += regex[i];
        }
        explanations.push({
          part: quantifier,
          explanation: 'Quantificador: número específico de repetições'
        });
        break;
        
      default:
        if (inCharClass) {
          buffer += char;
        } else {
          explanations.push({
            part: char,
            explanation: getBasicCharExplanation(char)
          });
        }
    }
  }

  return explanations;
};

const getEscapeSequenceExplanation = (char: string): string => {
  const explanations: Record<string, string> = {
    d: 'Qualquer dígito (equivalente a [0-9])',
    w: 'Qualquer caractere alfanumérico (letras, números ou underscore)',
    s: 'Qualquer espaço em branco (espaço, tab, quebra de linha)',
    D: 'Qualquer caractere que NÃO é dígito',
    W: 'Qualquer caractere que NÃO é alfanumérico',
    S: 'Qualquer caractere que NÃO é espaço em branco',
    b: 'Limite de palavra',
    B: 'Não é limite de palavra',
    t: 'Tabulação horizontal',
    n: 'Nova linha',
    r: 'Retorno de carro',
    '.': 'Literalmente um ponto',
    '\\': 'Literalmente uma barra invertida'
  };
  
  return explanations[char] || `Caractere especial: \\${char}`;
};

const getBasicCharExplanation = (char: string): string => {
  const explanations: Record<string, string> = {
    '.': 'Qualquer caractere único (exceto quebras de linha)',
    '^': 'Início da string',
    '$': 'Fim da string',
    '*': 'Zero ou mais ocorrências',
    '+': 'Uma ou mais ocorrências',
    '?': 'Zero ou uma ocorrência',
    '|': 'Operador "ou" (alternância)'
  };
  
  return explanations[char] || `Caractere literal "${char}"`;
};