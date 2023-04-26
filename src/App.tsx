import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

type Question = {
	id: number;
	author: string;
	content: string;
	isAnswered: boolean;
	answer?: {
		name: string;
		content: string;
	};
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

	return (
		<div>
			<h1>Questions & Answers</h1>
			<QuestionForm onSubmit={handleNewQuestion} />
			<QuestionList
				questions={questions}
				onToggleAnswered={toggleAnsweredStatus}
			/>
		</div>
	);
};

export default App;
