
import React from 'react';
import type { Method } from '../types';
import { CheckCircleIcon, XCircleIcon } from './Icons';

interface MethodCardProps {
  method: Method;
}

const MethodCard: React.FC<MethodCardProps> = ({ method }) => {
  return (
    <div className="bg-brand-light/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-gray-900/50 mr-4 text-brand-accent">
            {method.icon}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-wide">{method.title}</h3>
        </div>
        <p className="text-gray-300 mb-6">{method.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg text-green-400 mb-3">Преимущества</h4>
            <ul className="space-y-2">
              {method.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon />
                  <span className="text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-red-400 mb-3">Недостатки</h4>
            <ul className="space-y-2">
              {method.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <XCircleIcon />
                  <span className="text-gray-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-brand-accent mb-2">Лучше всего подходит для</h4>
          <p className="text-gray-300 bg-gray-900/50 p-4 rounded-lg">{method.scope}</p>
        </div>
      </div>
    </div>
  );
};

export default MethodCard;