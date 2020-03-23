import React from "react";
import { Link } from "react-router-dom";
import "./notfound.style.css";
import authBG from "../../assets/auth-bg.jpg";

const NotFound = () => {
	return (
		<div className="not-found" style={{ backgroundImage: `url(${authBG})` }}>
			<h1>404</h1>
			<p>Under Construction</p>
			<Link to="/">Back to Red Onion</Link>
		</div>
	);
};

export default NotFound;