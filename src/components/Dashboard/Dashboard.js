import React from "react";
import { connect } from "react-redux";
import TempTodo from "../Todo/TempTodo";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ profile, user, isAuthenticated }) => {
	const navigate = useNavigate();
	if (!isAuthenticated) {
		navigate(-1);
	}

	return (
		<div style={{ background: "white" }}>
			{profile ? JSON.stringify(profile) : "No Profile"}
			<br />
			{user ? JSON.stringify(user.name) : "No User"}
			<br />
			<TempTodo />
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.stats,
	user: state.auth.user,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Dashboard);
