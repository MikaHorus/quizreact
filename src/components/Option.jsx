// Option.js

import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange, answered, isCorrect, correctAnswer } = this.props;

        return (
            <div className='space-y-3 animate-slide-in-up'>
                {options.map((option, index) => {
                    const isCorrectOption = option === correctAnswer;
                    const isSelected = selectedOption === option;
                    let borderClass = "border-slate-600 hover:border-blue-400";
                    let bgClass = "bg-slate-700 hover:bg-slate-600";

                    if (answered) {
                        if (isCorrectOption) {
                            borderClass = "border-green-500 bg-green-900 bg-opacity-30";
                            bgClass = "bg-green-900 bg-opacity-30";
                        } else if (isSelected && !isCorrect) {
                            borderClass = "border-red-500 bg-red-900 bg-opacity-30";
                            bgClass = "bg-red-900 bg-opacity-30";
                        }
                    }

                    return (
                        <label
                            key={index}
                            className={`flex items-center p-4 ${bgClass} border-2 ${borderClass} rounded-lg cursor-pointer transition-all duration-300 group transform ${!answered ? 'hover:scale-105 hover:-translate-y-1' : 'cursor-not-allowed'}`}
                            style={{ animationDelay: `${index * 0.1}s`, animation: 'slideInUp 0.5s ease-out forwards' }}
                        >
                            <input
                                type="radio"
                                name="option"
                                value={option}
                                checked={isSelected}
                                onChange={onOptionChange}
                                disabled={answered}
                                className="w-5 h-5 text-blue-500 bg-slate-700 border-slate-600 focus:ring-2 focus:ring-blue-400 cursor-pointer disabled:cursor-not-allowed"
                            />
                            <span className="ml-4 text-lg text-white group-hover:text-blue-300 transition-colors">
                                {option}
                            </span>
                            {answered && isCorrectOption && (
                                <div className="ml-auto">
                                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-checkmark">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            {answered && isSelected && !isCorrect && (
                                <div className="ml-auto">
                                    <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center animate-checkmark">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            {!answered && isSelected && (
                                <div className="ml-auto">
                                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-checkmark">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default Options;