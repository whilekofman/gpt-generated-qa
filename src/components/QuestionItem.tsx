import React, { useState } from "react";
import AnswerForm from "./AnswerForm";

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

type QuestionItemProps = {
	question: Question;
	onToggleAnswered: (id: number) => void;
	onAnswer: (questionId: number, answer: Answer) => void;
};

const QuestionItem: React.FC<QuestionItemProps> = ({
	question,
	onToggleAnswered,
	onAnswer,
}) => {
	const [showAnswerForm, setShowAnswerForm] = useState(false);

	const handleToggle = () => {
		onToggleAnswered(question.id);
	};

	const handleAnswer = (name: string, content: string) => {
		const newAnswer: Answer = { name, content };
		onAnswer(question.id, newAnswer);
		setShowAnswerForm(false);
	};

	return (
		<li>
			<div>
				<strong>Question:</strong> {question.content}
			</div>
			<div>
				<strong>Author:</strong> {question.author}
			</div>
			<div>
				<strong>Status:</strong>{" "}
				{question.isAnswered ? "Answered" : "Unanswered"}
			</div>
			<button onClick={handleToggle}>
				{question.isAnswered
					? "Mark as Unanswered"
					: "Mark as Answered"}
			</button>
			{showAnswerForm ? (
				<AnswerForm
					onSubmit={handleAnswer}
					onCancel={() => setShowAnswerForm(false)}
				/>
			) : (
				<button onClick={() => setShowAnswerForm(true)}>Answer</button>
			)}
			{/* Display existing answers */}
			{question.answers.map((answer, index) => (
				<div key={index}>
					<strong>Answered by:</strong> {answer.name}
					<div>{answer.content}</div>
				</div>
			))}
		</li>
	);
};

export default QuestionItem;
