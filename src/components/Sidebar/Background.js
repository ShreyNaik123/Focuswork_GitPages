// import React, { useEffect, useState } from "react";
// import { useBackground } from "./BackgroundProvider";
// import { Link } from "react-router-dom";

// const Backgrounds = ({
// 	updateBackground,
// 	currentWallpaper,
// 	setCurrentWallpaper,
// }) => {
// 	const { setBackground } = useBackground();
// 	const [key, setKey] = useState(0);

// 	const getId = async () => {
// 		await new Promise((resolve) => setTimeout(resolve, 900));
// 		const activeElement = document.querySelector(".active img");
// 		console.log(activeElement);
// 		const id = activeElement.src.match(/image(\d+)\./)[1];
// 		const key = id !== 0 ? id - 1 : id;
// 		if (activeElement) {
// 			setKey(key);
// 			setCurrentWallpaper(key);
// 		} else {
// 			console.log("No active element found");
// 		}
// 	};

// 	function importAll(r) {
// 		return r
// 			.keys()
// 			.map((key) => ({
// 				key,
// 				id: parseInt(key.match(/(\d+)/)[0], 10), // Extract and parse the numeric part
// 			}))
// 			.sort((a, b) => a.id - b.id) // Sort by the parsed numeric part
// 			.map((item) => item.key)
// 			.map(r);
// 	}

// 	const images = importAll(
// 		require.context("../../media/images", false, /\.(png|jpe?g|svg|gif)$/)
// 	);

// 	return (
// 		<div id="carouselExample" className="image-container carousel slide">
// 			<div className="carousel-inner">
// 				{images.map((image, index) => (
// 					<div
// 						className={`gallery-image carousel-item ${
// 							index === 0 ? "active" : ""
// 						}`}
// 					>
// 						<img key={index} src={image} alt="background" />
// 					</div>
// 				))}
// 			</div>
// 			<button
// 				className="carousel-control-prev"
// 				type="button"
// 				data-bs-target="#carouselExample"
// 				data-bs-slide="prev"
// 				onClick={() => getId()}
// 			>
// 				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
// 				<span className="visually-hidden">Previous</span>
// 			</button>
// 			<button
// 				className="carousel-control-next"
// 				type="button"
// 				data-bs-target="#carouselExample"
// 				data-bs-slide="next"
// 				onClick={() => getId()}
// 			>
// 				<span className="carousel-control-next-icon" aria-hidden="true"></span>
// 				<span className="visually-hidden">Next</span>
// 			</button>

// 			<p style={{ display: "inline" }}>
// 				Wallpapers from{" "}
// 				<Link
// 					to="https://www.unsplash.com"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					className="unsplash-link"
// 				>
// 					Unsplash
// 				</Link>
// 			</p>
// 		</div>
// 	);
// };

// export default Backgrounds;

import React, { useEffect, useState } from "react";
import { useBackground } from "./BackgroundProvider";
import { Link } from "react-router-dom";

const Backgrounds = ({
	updateBackground,
	currentWallpaper,
	setCurrentWallpaper,
}) => {
	const { setBackground } = useBackground();
	const [key, setKey] = useState(0);
	const [loading, setLoading] = useState(true); // State to track loading status

	const getId = async () => {
		await new Promise((resolve) => setTimeout(resolve, 900));
		const activeElement = document.querySelector(".active img");
		console.log(activeElement);
		const id = activeElement.src.match(/image(\d+)\./)[1];
		const key = id !== 0 ? id - 1 : id;
		if (activeElement) {
			setKey(key);
			setCurrentWallpaper(key);
		} else {
			console.log("No active element found");
		}
	};

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

	return (
		<div id="carouselExample" className="image-container carousel slide">
			<div className="carousel-inner">
				{images.map((image, index) => (
					<div
						className={`gallery-image carousel-item ${
							index === 0 ? "active" : ""
						}`}
						key={index}
					>
						{loading && <Loader />} {/* Show loader while image is loading */}
						<img
							src={image}
							alt="background"
							onLoad={() => setLoading(false)} // Set loading to false when the image has loaded
						/>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="prev"
				onClick={() => getId()}
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExample"
				data-bs-slide="next"
				onClick={() => getId()}
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>

			<p style={{ display: "inline" }}>
				Wallpapers from{" "}
				<Link
					to="https://www.unsplash.com"
					target="_blank"
					rel="noopener noreferrer"
					className="unsplash-link"
				>
					Unsplash
				</Link>
			</p>
		</div>
	);
};

const Loader = () => (
	<div className="loader-container">
		<img
			src="../../media/loader/pomu-jam.gif"
			alt="loading..."
			className="loader"
		/>
	</div>
);

export default Backgrounds;
