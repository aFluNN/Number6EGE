import React from 'react';
import { METHODS } from '../constants';
import MethodCard from '../components/MethodCard';

const MethodsView: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Три основных метода</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Изучите сильные и слабые стороны каждого подхода, чтобы принять взвешенное решение в день экзамена.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {METHODS.map((method) => (
          <MethodCard key={method.id} method={method} />
        ))}
      </div>
    </div>
  );
};

export default MethodsView;