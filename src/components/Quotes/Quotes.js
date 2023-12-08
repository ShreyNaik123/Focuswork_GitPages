import React, { useEffect, useState } from "react";

function Quotes({ currentState }) {
	const fail_msg =
		"Cannot get new quotes, please check your internet connection";
	const [quote, setQuote] = useState(null);
	async function updateQuote() {
		try {
			const response = await fetch("https://api.quotable.io/random");
			const { statusCode, statusMessage, ...data } = await response.json();
			if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
			setQuote(data);
		} catch (error) {
			console.error(error);
			setQuote({
				content: fail_msg,
			});
		}
	}
	useEffect(() => {
		updateQuote();
	}, [currentState]);

	if (!quote) return null;

	return (
		<div className="quotes_main">
			{quote.content}
			<br />
			<i>{quote.author}</i>
		</div>
	);
}

export default Quotes;
