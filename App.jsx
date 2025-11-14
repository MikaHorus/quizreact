// App.js

import React, { Component } from "react";
import Question from "./src/components/Questions.jsx";
import qBank from "./src/components/QuestionBank.js";
import Score from "./src/components/Score.jsx";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };

    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
            this.state;
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
                <div className="w-full max-w-2xl animate-fade-in-scale">
                    <div className="text-center mb-12 animate-slide-in-down">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            QUIZ APP
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-slate-800 backdrop-blur-xl bg-opacity-40 rounded-2xl shadow-2xl border border-slate-700 p-8 md:p-12 animate-slide-in-up">
                        {!quizEnd ? (
                            <>
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm font-semibold text-blue-300">
                                            Question {currentQuestion + 1}/{questionBank.length}
                                        </span>
                                        <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                                                style={{
                                                    width: `${((currentQuestion + 1) / questionBank.length) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <Question
                                    question={questionBank[currentQuestion]}
                                    selectedOption={selectedOption}
                                    onOptionChange={this.handleOptionChange}
                                    onSubmit={this.handleFormSubmit}
                                />
                            </>
                        ) : (
                            <Score
                                score={score}
                                totalQuestions={questionBank.length}
                                onRestart={() => {
                                    this.setState({
                                        currentQuestion: 0,
                                        selectedOption: "",
                                        score: 0,
                                        quizEnd: false,
                                    });
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;