export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
	return (
		<li className="todo_item">
			<input
				class="form-check-input"
				type="checkbox"
				id="flexCheckDefault"
				checked={completed}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label>{completed ? <s>{title}</s> : title}</label>
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				<i class="bi bi-x"></i>
			</button>
		</li>
	);
}
