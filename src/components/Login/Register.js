import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import sideSvg from "../../media/icons/undraw_study.svg";

const Register = ({ register }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log("props action set");
		} else {
			register({ name, email, password });
		}
	};

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
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={(e) => onChange(e)}
						value={email}
						name="email"
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						onChange={(e) => onChange(e)}
						aria-describedby="basic-addon1"
						value={name}
						name="name"
					/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						onChange={(e) => onChange(e)}
						name="password"
					/>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword2" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword2"
						onChange={(e) => onChange(e)}
						name="password2"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);
