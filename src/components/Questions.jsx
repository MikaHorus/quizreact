// Question.js

import React, { Component } from "react";
import Options from "./Option.jsx";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit, answered, isCorrect, onNext } = this.props;

        return (
            <div className={`animate-fade-in-scale ${answered && !isCorrect ? 'animate-shake' : ''}`}>
                <div className={`mb-8 animate-slide-in-down ${answered ? (isCorrect ? 'bg-green-900 bg-opacity-20 border border-green-500' : 'bg-red-900 bg-opacity-20 border border-red-500') : ''} p-4 rounded-lg transition-all duration-300`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {question.question}
                    </h2>
                    
                    {answered && (
                        <div className={`text-sm font-semibold mb-4 ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                            {isCorrect ? (
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Bonne réponse !
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Mauvaise réponse
                                </span>
                            )}
                        </div>
                    )}
                    
                    {answered && !isCorrect && (
                        <div className="text-sm text-yellow-300 font-semibold">
                            La bonne réponse était : <span className="text-cyan-300">{question.answer}</span>
                        </div>
                    )}
                </div>

                <form onSubmit={onSubmit} className="space-y-6 animate-slide-in-up">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                        answered={answered}
                        isCorrect={isCorrect}
                        correctAnswer={question.answer}
                    />

                    <div className="pt-6 space-y-3">
                        {!answered ? (
                            <button
                                type="submit"
                                disabled={!selectedOption}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Répondre
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={onNext}
                                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Suivant →
                            </button>
                        )}
                    </div>
                </form>
            </div>
        );
    }
}

export default Question;