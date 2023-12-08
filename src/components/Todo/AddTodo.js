import { useState } from "react";
const AddTodo = ({ onSubmit, addTask, isAuthenticated, loadStats }) => {
	const [newItem, setNewItem] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (newItem === "") return;
		onSubmit(newItem);
		setNewItem("");
	}

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<div className="form-row">
				{/* <label htmlFor="item">Add new Task</label> */}
				<input
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					type="text"
					id="item"
					placeholder="Add New Task"
				/>
			</div>
			<button className="btn">Add</button>
		</form>
	);
};

export default AddTodo;
