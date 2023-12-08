// import { useEffect } from "react";
// import { TodoItem } from "./TodoItem";
// import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { loadStats } from "../../actions/profile";
// function TempTodo({
// 	todos = null,
// 	toggleTodo = null,
// 	deleteTodo = null,
// 	profile,
// 	isAuthenticated,
// 	profileLoading,
// }) {
// 	const date = new Date();
// 	date.setDate(date.getDate());
// 	const formattedDate = date.toISOString().split("T")[0];
// 	var offlineProfile;
// 	if (profile !== null) {
// 		offlineProfile = profile;
// 	} else {
// 		offlineProfile = null;
// 	}

// 	console.log(`profile : ${JSON.stringify(profile)}`);
// 	console.log(`offlineprofile : ${JSON.stringify(offlineProfile)}`);
// 	return (
// 		<ul className="todo_item_group">
// 			{/* {JSON.stringify(profile[formattedDate])} */}
// 			{/* {profile && isAuthenticated && formattedDate in profile
// 				? profile[formattedDate].tasks.map((todo) => (
// 						<TodoItem
// 							key={uuidv4()}
// 							todo={todo}
// 							toggleTodo={toggleTodo}
// 							deleteTodo={deleteTodo}
// 						/>
// 				  ))
// 				: "No Todos"} */}
// 			{/* {profileLoading ? (
// 				<h5>Loading...</h5>
// 			) : profile && isAuthenticated && formattedDate in profile ? (
// 				profile[formattedDate].tasks.map((todo) => (
// 					<TodoItem
// 						key={uuidv4()}
// 						todo={todo}
// 						toggleTodo={toggleTodo}
// 						deleteTodo={deleteTodo}
// 					/>
// 				))
// 			) : (
// 				"No Todos"
// 			)} */}
// 			{profile
// 				? isAuthenticated && formattedDate in profile
// 					? profile[formattedDate].tasks.map((todo) => (
// 							<TodoItem
// 								key={uuidv4()}
// 								todo={todo}
// 								toggleTodo={toggleTodo}
// 								deleteTodo={deleteTodo}
// 							/>
// 					  ))
// 					: "No Todos"
// 				: offlineProfile && formattedDate in offlineProfile
// 				? offlineProfile[formattedDate].tasks.map((todo) => (
// 						<TodoItem
// 							key={uuidv4()}
// 							todo={todo}
// 							toggleTodo={toggleTodo}
// 							deleteTodo={deleteTodo}
// 						/>
// 				  ))
// 				: "No Todos2"}
// 		</ul>
// 	);
// }
// const mapStateToProps = (state) => ({
// 	profile: state.profile.stats,
// 	isAuthenticated: state.auth.isAuthenticated,
// 	profileLoading: state.profile.profileLoading,
// });

// export default connect(mapStateToProps, { loadStats })(TempTodo);
// import { useEffect } from "react";
// import { TodoItem } from "./TodoItem";
// import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { loadStats } from "../../actions/profile";

// function TempTodo({
// 	profile,
// 	isAuthenticated,
// 	profileLoading,
// 	formattedDate,
// 	toggleTodo,
// 	deleteTodo,
// 	loadStats,
// }) {
// 	useEffect(() => {
// 		if (isAuthenticated) {
// 			loadStats();
// 		}
// 	}, [isAuthenticated, loadStats]);

// 	return (
// 		<ul className="todo_item_group">
// 			{profile &&
// 			isAuthenticated &&
// 			profileLoading === false &&
// 			formattedDate in profile
// 				? profile[formattedDate].tasks.map((todo) => (
// 						<TodoItem
// 							key={uuidv4()}
// 							todo={todo}
// 							toggleTodo={toggleTodo}
// 							deleteTodo={deleteTodo}
// 						/>
// 				  ))
// 				: "No Todos"}
// 		</ul>
// 	);
// }

// const mapStateToProps = (state) => ({
// 	profile: state.profile.stats,
// 	isAuthenticated: state.auth.isAuthenticated,
// 	profileLoading: state.profile.profileLoading,
// 	formattedDate: new Date().toISOString().split("T")[0],
// });

// export default connect(mapStateToProps, { loadStats })(TempTodo);
