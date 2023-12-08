import "./App.css";
import { Fragment, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import Timer from "./components/Timer/Timer";
import Backgrounds from "./components/Sidebar/Background";

function App() {
	const expiryTimestamp = new Date();
	const { seconds, minutes, hours, isRunning, pause, resume, restart } =
		useTimer({
			expiryTimestamp,
			onExpire: () => {
				console.log("onExpire Called");
				onEnd();
			},
		});

	const [sessionTime, updateSessionTime] = useState(0);
	const [currentState, updateCurrentState] = useState("Not Running");
	const [breakTime, updateBreakTime] = useState(600);
	const [longBreakTime, updateLongBreakTime] = useState(900);
	const [sessions, updateSession] = useState(1);
	const [currentWallpaper, setCurrentWallpaper] = useState(1);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMsg, setAlertMsg] = useState("");
	const [sessionGoal, setSessionGoal] = useState(0);
	const [sessionEnabled, setSessionEnabled] = useState(true);
	const sessionEndSoundRef = useRef(null);
	// TODOS
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];

		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	// Alert Toggler

	const toggleAlert = () => {
		if (currentState === "Not Running") return;
		let msg;
		setShowAlert(true);
		console.log(`Sessions ${sessions} Goal = ${sessionGoal}`);
		if (sessions === parseInt(sessionGoal, 10) && currentState === "Running") {
			console.log("sessions === goal");
			msg =
				"Congratulations!! You have completed your Goal!! You can continue working and we will update your goal as you work!!";
		} else {
			console.log(`Current State in else ${currentState}`);
			if (currentState === "Running")
				msg = `Great Work!! You have finished ${sessions} session/s! Take a break and stay hydrated!`;
			else {
				msg = "Break over!! Time to get back to the grind!! Good Luck!!";
			}
		}

		setAlertMsg(msg);

		setTimeout(() => {
			setShowAlert(false);
		}, 5000);
	};

	const playSessionEndSound = () => {
		if (sessionEndSoundRef.current) {
			sessionEndSoundRef.current.play();
		}
	};

	const onEnd = async (type = "None") => {
		await new Promise((resolve) => setTimeout(resolve, 0));

		if (currentState === "Running") {
			// if (type !== "Skip") {
			updateSessionCounter(sessions + 1);
			// }
			toggleAlert();

			playSessionEndSound();
			// console.log(`Current Session ${sessions} ${sessions % 3 === 0}`);
			var breakDuration = sessions % 3 === 0 ? longBreakTime : breakTime;
			restartTimer(breakDuration);

			updateCurrentState("Break");
		} else if (currentState === "Break") {
			toggleAlert();
			playSessionEndSound();
			restartTimer(sessionTime);
			updateCurrentState("Running");
		}
	};

	const updateSessionCounter = async (session) => {
		updateSession(session);
		await new Promise((resolve) => setTimeout(resolve, 0));
	};
	const restartTimer = async (time) => {
		const updatedTime = new Date();
		updatedTime.setSeconds(updatedTime.getSeconds() + time);
		restart(updatedTime);
	};

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Fragment>
				<Routes>
					<Route path="/backgrounds" element={<Backgrounds />} />
					<Route
						path="/"
						element={
							<Timer
								sessionTime={sessionTime}
								currentState={currentState}
								breakTime={breakTime}
								longBreakTime={longBreakTime}
								sessions={sessions}
								updateSession={updateSession}
								seconds={seconds}
								minutes={minutes}
								hours={hours}
								isRunning={isRunning}
								pause={pause}
								resume={resume}
								restart={restart}
								onEnd={onEnd}
								updateSessionTime={updateSessionTime}
								updateBreakTime={updateBreakTime}
								updateLongBreakTime={updateLongBreakTime}
								updateCurrentState={updateCurrentState}
								currentWallpaper={currentWallpaper}
								setCurrentWallpaper={setCurrentWallpaper}
								sessionEndSoundRef={sessionEndSoundRef}
								showAlert={showAlert}
								setShowAlert={setShowAlert}
								alertMsg={alertMsg}
								sessionGoal={sessionGoal}
								setSessionGoal={setSessionGoal}
								sessionEnabled={sessionEnabled}
								setSessionEnabled={setSessionEnabled}
								addTodo={addTodo}
								todos={todos}
								toggleTodo={toggleTodo}
								deleteTodo={deleteTodo}
							/>
						}
					/>
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
