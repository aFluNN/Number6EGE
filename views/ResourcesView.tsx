import React from 'react';
import { PYTHON_TEMPLATE, PITFALLS } from '../constants';
import CodeBlock from '../components/CodeBlock';
import { XCircleIcon } from '../components/Icons';

const ResourcesView: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Инструменты и ресурсы</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Основные шаблоны кода и предупреждения для оптимизации вашего программного подхода.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-brand-light/60 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Шаблон кода на Python</h2>
          <p className="text-gray-300 mb-2">Готовый к использованию шаблон для Программного метода. Скопируйте его в свой редактор и вставьте алгоритм из вашей задачи.</p>
          <CodeBlock code={PYTHON_TEMPLATE} />
        </div>
        <div className="bg-brand-light/60 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Частые ошибки</h2>
          <p className="text-gray-300 mb-4">Избегайте этих распространенных ошибок, которые могут привести к неверным ответам даже при правильном методе.</p>
          <div className="space-y-4">
            {PITFALLS.map((pitfall, index) => (
              <div key={index} className="bg-gray-900/50 p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                   <XCircleIcon />
                  <h3 className="font-semibold text-red-400">{pitfall.title}</h3>
                </div>
                <p className="text-gray-300 mt-2 pl-7">{pitfall.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesView;