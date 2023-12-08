import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginRegisterMenu = () => {
	return (
		<div className="container">
			<div className="register_menu">
				<p>
					Once logged in you can see your work/study stats displayed right here!
				</p>
				<Link to="/login">Create/Log into your existing account</Link>
			</div>
		</div>
	);
};

export default LoginRegisterMenu;
