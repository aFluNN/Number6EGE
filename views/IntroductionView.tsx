import React from 'react';
import { GreenTurtleIcon } from '../components/Icons';

const IntroductionView: React.FC = () => {
  return (
    <div className="bg-brand-light/60 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-8 text-center">
      <GreenTurtleIcon />
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Покорение Задачи 6 ЕГЭ по Информатике
      </h1>
      <p className="text-lg text-brand-accent mb-8">
        Ваш интерактивный гид по выбору самой эффективной стратегии решения.
      </p>

      <div className="space-y-6 text-gray-300 text-left">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">В чем сложность?</h2>
          <p>
            Задача 6 — это обязательная часть Компьютерного ЕГЭ по информатике. Она проверяет вашу способность анализировать алгоритмы для графического исполнителя "Черепаха". Многие ученики либо тратят на эту задачу непропорционально много времени, либо совершают критические ошибки, выбирая неоптимальный метод.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Проблема</h2>
          <p>
            В учебных материалах часто отсутствует единый, структурированный анализ всех эффективных методов решения Задачи 6. Ученики обычно изучают только один подход (например, ручной подсчет по клеткам), который часто оказывается неэффективным и подверженным ошибкам в более сложных задачах.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Наша цель</h2>
          <p>
            Это приложение систематизирует различные методы решения Задачи 6. Оно предоставляет четкую структуру, которая поможет вам проанализировать поставленную задачу и выбрать самый быстрый и точный метод, повышая вашу уверенность и экономя драгоценное время на экзамене.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionView;