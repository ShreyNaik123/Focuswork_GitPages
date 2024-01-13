import { maxWidth } from "@mui/system";

export function TodoItem({
	completed,
	id,
	title,
	toggleTodo,
	deleteTodo,
	statsOn = false,
}) {
	console.log(`statsOn = ${statsOn}`);
	let liStyle = {};
	if (statsOn) {
		liStyle = { maxWidth: "360px" };
	} else {
		liStyle = { width: "105px", textAlign: "left" };
	}
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					id={`flexCheckDefault_${id}`}
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				<label
					className="form-check-label text-truncate"
					htmlFor={`flexCheckDefault_${id}`}
					style={liStyle}
				>
					{completed ? <s>{title}</s> : title}
				</label>
			</div>
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				<i className="bi bi-x"></i>
			</button>
		</li>
	);
}
