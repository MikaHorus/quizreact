// Score.js

import React, { Component } from 'react';

class Score extends Component {
    render() {
        const { score, totalQuestions, onRestart } = this.props;
        const percentage = Math.round((score / totalQuestions) * 100);
        let message = "";
        let color = "";

        if (percentage === 100) {
            message = "Parfait ! 🎉";
            color = "from-green-400 to-emerald-400";
        } else if (percentage >= 80) {
            message = "Excellent ! 🌟";
            color = "from-blue-400 to-cyan-400";
        } else if (percentage >= 60) {
            message = "Bien ! 👍";
            color = "from-yellow-400 to-orange-400";
        } else {
            message = "À réessayer ! 💪";
            color = "from-red-400 to-pink-400";
        }

        return (
            <div className="text-center">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Résultats
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    <div className="relative w-48 h-48 mx-auto">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="12"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="12"
                                strokeDasharray={`${2 * Math.PI * 90 * (percentage / 100)} ${2 * Math.PI * 90}`}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dasharray 1s ease' }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#60A5FA" />
                                    <stop offset="100%" stopColor="#22D3EE" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className={`text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                                {percentage}%
                            </p>
                            <p className="text-sm text-slate-400 mt-1">Score</p>
                        </div>
                    </div>

                    <div className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                        {message}
                    </div>

                    <div className="bg-slate-700 bg-opacity-50 rounded-lg p-6 text-center">
                        <p className="text-lg text-slate-300 mb-2">
                            Vous avez répondu correctement à
                        </p>
                        <p className="text-3xl font-bold text-white">
                            {score} / {totalQuestions} questions
                        </p>
                    </div>

                    <button
                        onClick={onRestart}
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Recommencer
                    </button>
                </div>
            </div>
        );
    }
}

export default Score;