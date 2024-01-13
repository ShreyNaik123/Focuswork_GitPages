import React from "react";

export default function UserStats({ sessions, sessionTime }) {
	function convertTime(seconds) {
		if (seconds >= 3600) {
			const hours = Math.floor(seconds / 3600);
			const remainingMinutes = Math.floor((seconds % 3600) / 60);
			return `${hours} hours and ${remainingMinutes} minutes`;
		} else {
			const minutes = Math.floor(seconds / 60);
			return `${minutes}`;
		}
	}

	const stats = [
		{ id: 1, name: "Sessions Today", value: sessions },
		{
			id: 2,
			name: `Minutes\nTime Focused Today`,
			value: sessions
				? convertTime(sessions * sessionTime)
				: convertTime(sessionTime),
		},
	];

	return (
		<div className="bg-white py-5 w-100">
			<div className="container">
				<div className="row justify-content-center">
					{stats.map((stat) => (
						<div key={stat.id} className="col-md-6 my-3">
							<dl className="text-center">
								<dd
									className="text-3xl font-weight-bold text-gray-900"
									style={{ fontSize: "xxx-large" }}
								>
									{stat.value}
								</dd>
								<dt style={{ whiteSpace: "pre-line", color: "#6B7280" }}>
									{stat.name}
								</dt>
							</dl>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
