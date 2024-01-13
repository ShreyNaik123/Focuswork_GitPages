import React from "react";
import { TodoList } from "../Todo/TodoList";
import UserStats from "./UserStats";
const Stats = ({
	data,
	stats,
	setData,
	sessions,
	sessionGoal,
	sessionTime,
	todos,
	toggleTodo,
	deleteTodo,
}) => {
	const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
	const today = new Date();

	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const day = today.getDate();

	const formattedDate = `${day.toString().padStart(2, "0")}/${month
		.toString()
		.padStart(2, "0")}/${year}`;

	const barWidth =
		sessions === 0 ? 0 : (sessions / parseInt(sessionGoal)) * 100;

	return (
		<div className="stats-body">
			<div className="stats-date">{formattedDate}</div>
			<div className="stats-content">
				<UserStats sessions={sessions} sessionTime={sessionTime} />
			</div>
			<div
				class="progress"
				role="progressbar"
				aria-label="Basic example"
				aria-valuenow="0"
				aria-valuemin="0"
				aria-valuemax="100"
			>
				<div className="progress-bar" style={{ width: `${barWidth}%` }}>
					{`${parseInt(barWidth)}%`}
				</div>
			</div>
			{/* stats_todolist */}
			<div>
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
					statsOn={true}
				/>
			</div>
		</div>
	);
};

export default Stats;
