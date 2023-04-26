import React, { useState } from "react";
import AnswerForm from "./AnswerForm";

type Question = {
	id: number;
	author: string;
	content: string;
	isAnswered: boolean;
};

type QuestionItemProps = {
	question: Question;
	onToggleAnswered: (id: number) => void;
};

const QuestionItem: React.FC<QuestionItemProps> = ({
	question,
	onToggleAnswered,
}) => {
	const [showAnswerForm, setShowAnswerForm] = useState(false);

	const handleToggle = () => {
		onToggleAnswered(question.id);
	};

	const handleAnswer = (name: string, answer: string) => {
		// Logic to handle and store the answer
		// ...
		setShowAnswerForm(false);
	};

	const handleToggle = () => {
		onToggleAnswered(question.id);
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
				<>
					{question.answer ? (
						<div>
							<strong>Answered by:</strong> {question.answer.name}
							<div>{question.answer.content}</div>
						</div>
					) : (
						<button onClick={() => setShowAnswerForm(true)}>
							Answer
						</button>
					)}
				</>
			)}
		</li>
	);
};

export default QuestionItem;
