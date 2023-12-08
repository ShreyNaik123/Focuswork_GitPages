import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import sideSvg from "../../media/icons/undraw_study.svg";

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { email, password } = formData;
	const navigate = useNavigate();
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		try {
			login(email, password);
		} catch (error) {}
	};
	if (isAuthenticated) {
		navigate(-1);
	}

	return (
		<div className="d-flex login_page">
			<div className="svg_container">
				<img src={sideSvg} className="login_image" />
			</div>
			<form onSubmit={(e) => onSubmit(e)} className="login_form">
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Email address
					</label>
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={(e) => onChange(e)}
						value={email}
						name="email"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">
						Password
					</label>
					<input
						type="password"
						class="form-control"
						id="exampleInputPassword1"
						onChange={(e) => onChange(e)}
						name="password"
					/>
				</div>

				<button type="submit" class="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
