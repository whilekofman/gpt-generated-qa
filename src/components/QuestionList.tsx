import React from "react";
import QuestionItem from "./QuestionItem";

type Question = {
	id: number;
	author: string;
	content: string;
	isAnswered: boolean;
};

type QuestionListProps = {
	questions: Question[];
	onToggleAnswered: (id: number) => void;
};

const QuestionList: React.FC<QuestionListProps> = ({
	questions,
	onToggleAnswered,
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
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default QuestionList;
