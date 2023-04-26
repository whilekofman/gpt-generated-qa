import React from "react";
import QuestionItem from "./QuestionItem";

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

type QuestionListProps = {
	questions: Question[];
	onToggleAnswered: (id: number) => void;
	onAnswer: (questionId: number, answer: Answer) => void; // Add this prop definition
};

const QuestionList: React.FC<QuestionListProps> = ({
	questions,
	onToggleAnswered,
	onAnswer, // Destructure the onAnswer prop
}) => {
	return (
		<div>
			<h2>Questions</h2>
			{questions.length === 0 ? (
				<p>No questions have been submitted.</p>
			) : (
				<ul>
					{questions.map((question) => (
						<QuestionItem
							key={question.id}
							question={question}
							onToggleAnswered={onToggleAnswered}
							onAnswer={onAnswer} // Pass the onAnswer prop to QuestionItem
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default QuestionList;