import React, { useEffect, useState } from "react";
import { useBackground } from "../Sidebar/BackgroundProvider";
import Sidebar from "../Sidebar/Sidebar";
import Clock from "./Clock";
import SessionCount from "./SessionCount";
import { TodoList } from "../Todo/TodoList";
import Lofi from "../Lofi/Lofi";
import mp3_file from "../../media/sounds/door_bell.mp3";
import { connect } from "react-redux";

function Timer({
	sessionTime,
	currentState,
	breakTime,
	longBreakTime,
	sessions,
	updateSession,
	seconds,
	minutes,
	hours,
	isRunning,
	pause,
	resume,
	restart,
	onEnd,
	updateSessionTime,
	updateBreakTime,
	updateLongBreakTime,
	updateCurrentState,
	currentWallpaper,
	setCurrentWallpaper,
	sessionEndSoundRef,
	showAlert,
	setShowAlert,
	alertMsg,
	sessionGoal,
	setSessionGoal,
	sessionEnabled,
	setSessionEnabled,
	addTodo,
	todos,
	toggleTodo,
	deleteTodo,
}) {
	const { background } = useBackground();

	const restartTimer = async (time) => {
		const updatedTime = new Date();

		updatedTime.setSeconds(updatedTime.getSeconds() + time);
		restart(updatedTime);
	};
	const date = new Date();
	date.setDate(date.getDate());
	const dateString = date.toISOString().split("T")[0];

	const restartSession = async () => {
		if (currentState === "Running") restartTimer(sessionTime);
		else {
			var breakDuration = sessions % 3 === 0 ? longBreakTime : breakTime;
			restartTimer(breakDuration);
		}
	};

	// Background
	function importAll(r) {
		return r
			.keys()
			.map((key) => ({
				key,
				id: parseInt(key.match(/(\d+)/)[0], 10), // Extract and parse the numeric part
			}))
			.sort((a, b) => a.id - b.id) // Sort by the parsed numeric part
			.map((item) => item.key)
			.map(r);
	}

	const images = importAll(
		require.context("../../media/images", false, /\.(png|jpe?g|svg|gif)$/)
	);

	const backgroundStyle = {
		textAlign: "center",
		backgroundImage: `url(${images[background]})`,
		height: "100vh",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
	};

	return (
		<div className="main_container" style={backgroundStyle}>
			<div className="side_container">
				<div className="side_clocks d-flex flex-direction-row">
					<Clock />
					<SessionCount
						sessions={sessions - 1}
						sessionGoal={sessionGoal}
						sessionEnabled={sessionEnabled}
					/>
				</div>

				<div className="todolist">
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button
									class="accordion-button todo_button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									Your Todo List
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									<TodoList
										todos={todos}
										toggleTodo={toggleTodo}
										deleteTodo={deleteTodo}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="liveAlertPlaceholder">
				{showAlert && (
					<div className="alert alert-success alert-dismissible" role="alert">
						{alertMsg}
						<button
							type="button"
							className="btn-close"
							onClick={() => setShowAlert(false)}
							aria-label="Close"
						></button>
					</div>
				)}
			</div>

			{/* Alert End */}

			<audio ref={sessionEndSoundRef}>
				<source id="src_mp3" type="audio/mp3" src={mp3_file} />
			</audio>
			<Sidebar
				updateSessionTime={updateSessionTime}
				updateBreakTime={updateBreakTime}
				updateLongBreakTime={updateLongBreakTime}
				restart={restart}
				updateCurrentState={updateCurrentState}
				sessionTime={sessionTime}
				breakTime={breakTime}
				longBreakTime={longBreakTime}
				currentWallpaper={currentWallpaper}
				setCurrentWallpaper={setCurrentWallpaper}
				sessionGoal={sessionGoal}
				setSessionGoal={setSessionGoal}
				setSessionEnabled={setSessionEnabled}
				addTodo={addTodo}
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
				sessions={sessions - 1}
			/>
			<div className="countdown">
				<span>{hours > 0 ? hours : null}</span>
				<span>
					{minutes.toString().length > 1 ? minutes : `0${minutes.toString()}`}
				</span>
				:
				<span>
					{seconds.toString().length > 1 ? seconds : `0${seconds.toString()}`}
				</span>
			</div>
			<div className="buttons btn-group">
				<button className="parent_btn btn" onClick={isRunning ? pause : resume}>
					{isRunning ? (
						<i className="bi bi-pause-circle-fill"></i>
					) : (
						<i className="bi bi-play-circle-fill"></i>
					)}
				</button>
				<button className="parent_btn btn" onClick={() => restartSession()}>
					<i className="bi bi-arrow-repeat"></i>
				</button>
				<button className="parent_btn btn" onClick={() => onEnd("Skip")}>
					<i className="bi bi-skip-forward-circle-fill"></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
