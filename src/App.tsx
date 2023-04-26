import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

type Answer = {
	name: string;
	content: string;
};

type Question = {
	id: number;
	author: string;
	content: string;
	isAnswered: boolean;
	answers: Answer[];
};

const App: React.FC = () => {
	const [questions, setQuestions] = useState<Question[]>([]);

	// Handle the submission of a new question from the QuestionForm component
	const handleNewQuestion = (author: string, content: string) => {
		const newQuestion: Question = {
			id: Date.now(),
			author,
			content,
			isAnswered: false,
			answers: [],
		};
		setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
	};

	// Toggle the answered status of a question
	const toggleAnsweredStatus = (id: number) => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((question) =>
				question.id === id
					? { ...question, isAnswered: !question.isAnswered }
					: question
			)
		);
	};

	// Add an answer to a question
	const handleAnswer = (questionId: number, answer: Answer) => {
		setQuestions((prevQuestions) =>
			prevQuestions.map((question) =>
				question.id === questionId
					? { ...question, answers: [...question.answers, answer] }
					: question
			)
		);
	};

	return (
		<div>
			<h1>Questions & Answers</h1>
			<QuestionForm onSubmit={handleNewQuestion} />
			<QuestionList
				questions={questions}
				onToggleAnswered={toggleAnsweredStatus}
				onAnswer={handleAnswer}
			/>
		</div>
	);
};

export default App;
