import React from "react";

const SetTimer = ({
	updateSessionTime,
	updateBreakTime,
	updateLongBreakTime,
	restart,
	updateCurrentState,
	sessionTime,
	breakTime,
	longBreakTime,
	sessionGoal,
	setSessionGoal,
	sessionEnabled,
	setSessionEnabled,
}) => {
	const setGoal = async (goal) => {
		await new Promise((resolve) => setTimeout(resolve, 0));

		setSessionGoal(goal);
	};

	const setSession = async (time) => {
		updateSessionTime(time);
		updateBreakTime(time);

		await new Promise((resolve) => setTimeout(resolve, 0));

		const updatedTime = new Date();
		updatedTime.setSeconds(updatedTime.getSeconds() + time);

		restart(updatedTime);
	};

	const setTime = async (sessionTime, breakTime, longBreakTime) => {
		await new Promise((resolve) => setTimeout(resolve, 0));

		// GET SESSION TIME
		var totalSeconds = document.getElementById("secondInput").value;
		console.log(totalSeconds);
		var updatedSessionTime = parseInt(totalSeconds, 10) * 60;
		console.log(updatedSessionTime);
		if (totalSeconds > 0) {
			setSession(updatedSessionTime);
		} else if (isNaN(updatedSessionTime)) {
			// NaN means user did not enter any value
			// default value is 1 min
			// In case user does not enter any value, it will start with 1 min as the time
			// since thats the value in the placeholder
			updatedSessionTime = 60;
			setSession(updatedSessionTime);
		}

		//GET BREAK TIME
		var totalBreak = document.getElementById("breakInput").value;
		var updatedBreakTime = parseInt(totalBreak, 10) * 60;
		console.log(updateBreakTime);
		if (isNaN(updatedBreakTime) || updatedBreakTime === 0) {
			updatedBreakTime = 600;
		}
		setBreak(updatedBreakTime);

		// GET LONG BREAK TIME
		var totalLongBreak = document.getElementById("longbreakInput").value;
		var updatedLongBreakTime = parseInt(totalLongBreak, 10) * 60;
		console.log(updateLongBreakTime);
		if (isNaN(updatedLongBreakTime) || updatedLongBreakTime === 0) {
			updatedLongBreakTime = 900;
		}
		setLongBreak(updatedLongBreakTime);

		// GET GOAL TIME
		var goal = document.getElementById("goal").value;
		if (goal > 0) setGoal(goal);
		else if (isNaN(goal)) setSessionEnabled(false);

		updateCurrentState("Running");
	};
	const setBreak = async (time) => {
		updateBreakTime(time);

		await new Promise((resolve) => setTimeout(resolve, 0));
	};

	const setLongBreak = async (time) => {
		updateLongBreakTime(time);

		await new Promise((resolve) => setTimeout(resolve, 0));
	};

	return (
		<div className="sidebar_content">
			<div className="options">
				<form className="time_form d-flex flex-column mb-3 justify-content-center was-validated">
					<div className="form_input form_input_large ">
						<label className="me-auto" htmlFor="goal">
							How many Sessions?
						</label>
						<input type="number" id="goal" name="goal" min="0" />
					</div>
					<div className="form_input position-relative has-validation">
						<label className="me-auto" htmlFor="secondInput">
							Time in Minutes
						</label>
						<input
							type="number"
							id="secondInput"
							name="minuteInput"
							placeholder={sessionTime > 0 ? sessionTime / 60 : 1}
							min="1"
						/>
					</div>
					<div className="form_input">
						<label className="me-auto" htmlFor="breakInput">
							Break Time in Minutes
						</label>
						<input
							type="number"
							id="breakInput"
							name="breakInput"
							placeholder={breakTime / 60}
							min="0"
						/>
					</div>
					<div className="form_input">
						<label className="me-auto" htmlFor="longbreakInput">
							Long Break Time in Minutes
						</label>
						<input
							type="number"
							id="longbreakInput"
							name="longbreakInput"
							min="0"
							placeholder={longBreakTime / 60}
							// onChange={(e) =>
							// 	updateLongBreakTime(parseInt(e.target.value, 10))
							// }
						/>
					</div>
				</form>
				<div className="submit_button_container">
					<button
						className="submit_btn btn btn-outline-light"
						type="button"
						onClick={setTime}
						data-bs-dismiss="modal"
					>
						Start Session
					</button>
				</div>
			</div>
		</div>
	);
};

export default SetTimer;
