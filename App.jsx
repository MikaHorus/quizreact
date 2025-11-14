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
            answered: false,
            isCorrect: null,
        };
    }

    handleOptionChange = (e) => {
        if (!this.state.answered) {
            this.setState({ selectedOption: e.target.value });
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.answered) return;
        this.checkAnswer();
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = this.state;
        const isCorrect = selectedOption === questionBank[currentQuestion].answer;
        
        this.setState({
            answered: true,
            isCorrect: isCorrect,
            score: isCorrect ? score + 1 : score,
        });
    };

    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
                answered: false,
                isCorrect: null,
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd, answered, isCorrect } =
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

                    <div className="bg-slate-800 backdrop-blur-xl bg-opacity-40 rounded-2xl shadow-2xl p-8 md:p-12 animate-slide-in-up">
                        {!quizEnd ? (
                            <>
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm font-semibold text-blue-300">
                                            Question {currentQuestion + 1}/{questionBank.length}
                                        </span>
                                        <span className="text-sm font-semibold text-cyan-300">
                                            Score: {score}
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
                                    answered={answered}
                                    isCorrect={isCorrect}
                                    onNext={this.handleNextQuestion}
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
                                        answered: false,
                                        isCorrect: null,
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