import React, { useState } from "react";
import waveform from "../../media/icons/wave.gif";

const Lofi = () => {
	const [animate, setAnimate] = useState(false);

	const changeAnimation = () => {
		setAnimate(!animate);
	};

	return (
		<div style={{ color: "black" }} onClick={changeAnimation}>
			<i className="bi bi-spotify" style={{ transition: "all 0.5s" }}></i>
			{animate ? <img src={waveform} alt="" /> : null}
		</div>
	);
};

export default Lofi;
