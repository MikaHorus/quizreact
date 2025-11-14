// Question.js

import React, { Component } from "react";
import Options from "./Option.jsx";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        return (
            <div>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        {question.question}
                    </h2>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={!selectedOption}
                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Répondre
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Question;