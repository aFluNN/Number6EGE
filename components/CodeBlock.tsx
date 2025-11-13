
import React, { useState, useCallback } from 'react';
import { ClipboardCopyIcon } from './Icons';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copyText, setCopyText] = useState('Копировать');

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopyText('Скопировано!');
      setTimeout(() => setCopyText('Копировать'), 2000);
    });
  }, [code]);

  return (
    <div className="bg-[#0d1117]/80 backdrop-blur-sm border border-white/10 rounded-lg my-4 relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white font-mono text-xs px-2 py-1 rounded transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center space-x-1"
      >
        <ClipboardCopyIcon />
        <span>{copyText}</span>
      </button>
      <pre className="p-4 overflow-x-auto">
        <code className="language-python text-sm font-mono text-gray-300">
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;