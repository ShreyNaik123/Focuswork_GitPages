import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import SetTimer from "./SetTimer";
import Backgrounds from "./Background";
import { useBackground } from "./BackgroundProvider";
import { TodoList } from "../Todo/TodoList";
import AddTodo from "../Todo/AddTodo";

const Sidebar = ({
	updateSessionTime,
	updateBreakTime,
	updateLongBreakTime,
	restart,
	updateCurrentState,
	sessionTime,
	breakTime,
	longBreakTime,
	updateBackground,
	currentWallpaper,
	setCurrentWallpaper,
	sessionGoal,
	setSessionGoal,
	sessionEnabled,
	setSessionEnabled,
	addTodo,
	todos,
	toggleTodo,
	deleteTodo,
}) => {
	const { setBackground } = useBackground();
	const handleWallpaperChange = async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setBackground(currentWallpaper + 1);
	};

	return (
		<div className="sidebar">
			<button
				className="btn btn-primary sidebar_toggler"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasExample"
				aria-controls="offcanvasExample"
			>
				<i className="bi bi-menu-button-wide-fill"></i>
			</button>

			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
			>
				{/* Modal1 */}
				<button
					type="button"
					className="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					<i className="bi bi-hourglass"></i>
				</button>

				<div
					className="modal fade modal1"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Set Timer
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<SetTimer
									updateSessionTime={updateSessionTime}
									updateBreakTime={updateBreakTime}
									updateLongBreakTime={updateLongBreakTime}
									restart={restart}
									updateCurrentState={updateCurrentState}
									sessionTime={sessionTime}
									breakTime={breakTime}
									longBreakTime={longBreakTime}
									sessionGoal={sessionGoal}
									setSessionGoal={setSessionGoal}
									sessionEnabled={sessionEnabled}
									setSessionEnabled={setSessionEnabled}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* model2 */}

				<button
					type="button"
					className="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal2"
				>
					<i class="bi bi-list-task"></i>
				</button>

				<div
					className="modal fade modal modal2"
					id="exampleModal2"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Set Todo
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<AddTodo onSubmit={addTodo} />
								<TodoList
									todos={todos}
									toggleTodo={toggleTodo}
									deleteTodo={deleteTodo}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Modal 2 End */}

				{/* Modal 3 */}
				<button
					type="button"
					className="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal3"
				>
					<i class="bi bi-person-circle"></i>
				</button>
				<div
					className="modal fade modal3"
					id="exampleModal3"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">Stats</div>
						</div>
					</div>
				</div>

				{/* Modal 3 End */}

				{/* Modal 4 */}

				<button
					type="button"
					className="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal4"
				>
					<i className="bi bi-card-image"></i>
				</button>

				<div
					className="modal fade modal-lg modal4"
					id="exampleModal4"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Set Background
								</h1>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<Backgrounds
									updateBackground={updateBackground}
									currentWallpaper={currentWallpaper}
									setCurrentWallpaper={setCurrentWallpaper}
								/>
							</div>
							<div className="modal-footer">
								{/* <button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button> */}
								<button
									type="button"
									className="btn btn-primary wallpaper_set"
									onClick={() => {
										handleWallpaperChange();
									}}
									data-bs-dismiss="modal"
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* Modal 4 End */}

				{/* Modal 5 */}
				<button
					type="button"
					className="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal5"
				>
					<i className="bi bi-discord"></i>
				</button>

				<div
					className="modal fade modal5"
					id="exampleModal5"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<h3>
									Join Woojin Cho's{" "}
									{
										<Link
											to="https://discord.gg/E9exJ4Tb"
											target="_blank"
											rel="noopener noreferrer"
										>
											Discord Channel
										</Link>
									}{" "}
									to study along more people!!
								</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Modals End */}
			</div>
		</div>
	);
};

export default Sidebar;
