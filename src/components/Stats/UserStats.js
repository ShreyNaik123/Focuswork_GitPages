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
		{ id: 1, name: "\nSessions Today", value: sessions },
		{
			id: 2,
			name: `Minutes\nTime Focused Today`,
			value: sessions
				? convertTime(sessions * sessionTime)
				: convertTime(sessionTime),
		},
	];

	// Find the maximum length of the stat values
	const maxLength = Math.max(...stats.map((stat) => stat.value.length));

	return (
		<div className="bg-white py-16 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="mx-auto flex max-w-xs flex-col gap-y-4"
						>
							<dt className="whitespace-pre-line text-base leading-7 text-gray-600">
								{stat.name}
							</dt>
							<dd
								className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
								style={{ width: `${maxLength}ch` }}
							>
								{stat.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
