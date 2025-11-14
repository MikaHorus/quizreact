// Option.js

import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        return (
            <div className='space-y-3 animate-slide-in-up'>
                {options.map((option, index) => (
                    <label
                        key={index}
                        className="flex items-center p-4 bg-slate-700 hover:bg-slate-600 border-2 border-slate-600 hover:border-blue-400 rounded-lg cursor-pointer transition-all duration-300 group transform hover:scale-105 hover:-translate-y-1"
                        style={{ animationDelay: `${index * 0.1}s`, animation: 'slideInUp 0.5s ease-out forwards' }}
                    >
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            className="w-5 h-5 text-blue-500 bg-slate-700 border-slate-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        />
                        <span className="ml-4 text-lg text-white group-hover:text-blue-300 transition-colors">
                            {option}
                        </span>
                        {selectedOption === option && (
                            <div className="ml-auto">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-checkmark">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </label>
                ))}
            </div>
        );
    }
}

export default Options;