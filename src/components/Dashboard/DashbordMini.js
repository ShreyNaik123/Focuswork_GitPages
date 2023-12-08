import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const DashbordMini = ({ profile, user }) => {
	const userData = user;
	const userProfile = profile;
	const date = new Date();
	date.setDate(date.getDate());
	const formattedDate = date.toISOString().split("T")[0];
	return (
		<div className="container">
			<div>{userData ? userData.name : "No NAME"}</div>
			<header>Your Stats</header>
			<div>
				<p>Today's Date: {formattedDate}</p>
				{userProfile ? (
					userProfile[formattedDate] ? (
						<div>
							<p>Sessions: {userProfile[formattedDate].sessions}</p>
							<p>Tasks: {userProfile[formattedDate].tasks.join(", ")}</p>
							<p>
								Total Time Spent: {userProfile[formattedDate].totalTimeSpent}
							</p>
						</div>
					) : (
						<p>No data available for today.</p>
					)
				) : (
					<p>Error Loading the Stats</p>
				)}
			</div>
			<Link to="/dashboard" className="btn btn-success">
				Go to dashboard
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.stats,
	user: state.auth.user,
});

export default connect(mapStateToProps)(DashbordMini);
