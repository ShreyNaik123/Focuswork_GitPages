import React from "react";

const SessionCount = ({ sessions, sessionGoal, sessionEnabled }) => {
	return (
		<div className="sessionsCount">
			<h1>{sessions}</h1>
			<h1>
				{sessionEnabled
					? sessions >= parseInt(sessionGoal, 10)
						? sessions
						: sessionGoal
					: sessions}
			</h1>
		</div>
	);
};

export default SessionCount;
