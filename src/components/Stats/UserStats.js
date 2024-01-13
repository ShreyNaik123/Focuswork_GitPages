import React, { useEffect, useState } from "react";

export default function UserStats({ sessions, sessionTime }) {
	const stats = [
		{ id: 1, name: "Sessions Today", value: sessions },
		{
			id: 2,
			name: `Minutes\nTime Focused Today`,
			value: sessions
				? parseInt((sessions * sessionTime) / 60)
				: parseInt(sessionTime),
		},
	];

	// Set a maximum height for the dd element
	const maxHeight = 210;
	return (
		<div className="bg-white py-5 w-100">
			<div className="container">
				<div className="row justify-content-center">
					{stats.map((stat) => (
						<div key={stat.id} className="col-md-6 my-3">
							<dl className="text-center d-flex flex-column justify-content-between h-100">
								<dd
									className="font-weight-bold text-gray-900"
									style={{
										maxHeight: `${maxHeight}px`,
										overflow: "hidden",
										fontSize: "xxx-large",
									}}
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
