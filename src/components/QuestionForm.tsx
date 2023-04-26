import React, { useState } from "react";

type QuestionFormProps = {
	onSubmit: (author: string, content: string) => void;
};

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (author.trim() && content.trim()) {
			onSubmit(author, content);
			// Clear the form fields after successful submission.
			setAuthor("");
			setContent("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="author">Name: </label>
				<input
					type="text"
					id="author"
					value={author}
					onChange={(event) => setAuthor(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="content">Question: </label>
				<textarea
					id="content"
					value={content}
					onChange={(event) => setContent(event.target.value)}
				/>
			</div>
			<button type="submit">Submit Question</button>
		</form>
	);
};

export default QuestionForm;
