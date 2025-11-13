import React, { useState } from 'react';
import { METHODS } from '../constants';
import type { Method } from '../types';

type Recommendation = 'analytical' | 'programming' | 'programming_viz';

const RecommendationCard: React.FC<{ recommendationId: Recommendation | null }> = ({ recommendationId }) => {
    if (!recommendationId) return null;

    let method: Method | undefined;
    let title: string = '';
    let description: string = '';

    if (recommendationId === 'analytical') {
        method = METHODS.find(m => m.id === 'analytical');
        title = "Лучший метод: Аналитический (Геометрический)";
        description = "Это, вероятно, самый быстрый подход. Проанализируйте алгоритм, чтобы найти координаты вершин и используйте геометрические формулы.";
    } else if (recommendationId === 'programming') {
        method = METHODS.find(m => m.id === 'programming');
        title = "Лучший метод: Программный (полный подсчет)";
        description = "Это самый надежный метод. Напишите скрипт, который не только нарисует фигуру, но и программно подсчитает внутренние точки.";
    } else if (recommendationId === 'programming_viz') {
        method = METHODS.find(m => m.id === 'programming');
        title = "Лучший метод: Программный (визуализация)";
        description = "Фигура может быть сложной. Используйте Python turtle для точной визуализации, а затем проведите аккуратный ручной подсчет на экране.";
    }

    if (!method) return null;

    return (
        <div className="bg-brand-light/70 rounded-lg p-6 shadow-2xl border border-brand-accent transition-all duration-300">
            <h3 className="text-2xl font-bold text-brand-accent mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="bg-gray-900/50 p-4 rounded-md">
                <h4 className="font-semibold text-white mb-2">Почему этот метод?</h4>
                <p className="text-gray-400 text-sm">{method.scope}</p>
            </div>
        </div>
    )
}

const ChooserView: React.FC = () => {
    const [step, setStep] = useState<number | 'done'>(0);
    const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

    const handleAnswer = (nextStep: number | 'done', rec: Recommendation | null) => {
        if (nextStep === 'done') {
            setRecommendation(rec);
        }
        setStep(nextStep);
    };

    const reset = () => {
        setStep(0);
        setRecommendation(null);
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Вопрос 1: Сложность алгоритма</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onClick={() => handleAnswer(1, null)} className="p-6 bg-brand-light/50 backdrop-blur-sm border border-transparent hover:border-brand-accent rounded-lg transition-all duration-200 text-left">
                                <h3 className="font-bold text-xl text-brand-accent">Простой</h3>
                                <p className="text-gray-300">В основном повороты на 90°, малые шаги и небольшое количество повторений в циклах.</p>
                            </button>
                            <button onClick={() => handleAnswer('done', 'programming')} className="p-6 bg-brand-light/50 backdrop-blur-sm border border-transparent hover:border-brand-accent rounded-lg transition-all duration-200 text-left">
                                <h3 className="font-bold text-xl text-brand-accent">Сложный</h3>
                                <p className="text-gray-300">Непрямые углы (30, 60, 120), большие числа или вложенные циклы, создающие запутанные узоры.</p>
                            </button>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Вопрос 2: Итоговая фигура</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onClick={() => handleAnswer('done', 'analytical')} className="p-6 bg-brand-light/50 backdrop-blur-sm border border-transparent hover:border-brand-accent rounded-lg transition-all duration-200 text-left">
                                <h3 className="font-bold text-xl text-brand-accent">Простой многоугольник</h3>
                                <p className="text-gray-300">Алгоритм очевидно рисует стандартную фигуру, например, прямоугольник или квадрат.</p>
                            </button>
                            <button onClick={() => handleAnswer('done', 'programming_viz')} className="p-6 bg-brand-light/50 backdrop-blur-sm border border-transparent hover:border-brand-accent rounded-lg transition-all duration-200 text-left">
                                <h3 className="font-bold text-xl text-brand-accent">Другое / Не уверен</h3>
                                <p className="text-gray-300">Фигура не является простым прямоугольником, или это сложно определить без отрисовки.</p>
                            </button>
                        </div>
                    </div>
                );
            case 'done':
                return (
                    <div className="text-center animate-fade-in">
                        <RecommendationCard recommendationId={recommendation} />
                        <button onClick={reset} className="mt-8 bg-brand-accent text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-brand-accent-hover transition-colors duration-200">
                            Начать заново
                        </button>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Интерактивный выбор метода</h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Ответьте на пару простых вопросов о вашей Задаче 6, чтобы получить персональную рекомендацию.
                </p>
            </div>
            <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-brand-light/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg">
                {renderStep()}
            </div>
        </div>
    );
};

export default ChooserView;