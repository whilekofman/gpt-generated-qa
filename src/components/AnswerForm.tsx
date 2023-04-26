import React, { useState } from "react";

type AnswerFormProps = {
	onSubmit: (name: string, answer: string) => void;
	onCancel: () => void;
};

const AnswerForm: React.FC<AnswerFormProps> = ({ onSubmit, onCancel }) => {
	const [name, setName] = useState("");
	const [answer, setAnswer] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (name.trim() && answer.trim()) {
			onSubmit(name, answer);
			setName("");
			setAnswer("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Your Name: </label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="answer">Your Answer: </label>
				<textarea
					id="answer"
					value={answer}
					onChange={(event) => setAnswer(event.target.value)}
				/>
			</div>
			<button type="submit">Submit Answer</button>
			<button type="button" onClick={onCancel}>
				Cancel
			</button>
		</form>
	);
};

export default AnswerForm;
