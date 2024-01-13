import { TodoItem } from "./TodoItem";
export function TodoList({ todos, toggleTodo, deleteTodo, statsOn }) {
	let listStyle = {};
	if (!statsOn) {
		listStyle = { overflowY: "scroll", maxHeight: " 400px" };
	}
	return (
		// list todo_item_group
		<ul className="list-group" style={listStyle}>
			{todos.length === 0 && "No Todos"}
			{todos.map((todo) => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
						statsOn={statsOn}
					/>
				);
			})}
		</ul>
	);
}
