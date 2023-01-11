import {
	AppBar,
	Avatar,
	Box,
	Button,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./styles";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/auth");
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	return (
		<AppBar sx={classes.appBar} position="static" color="inherit">
			<Link to="/" sx={classes.brandContainer}>
				<img src={memoriesText} alt="icon" height="45px" />
				<img
					style={classes.image}
					src={memoriesLogo}
					alt="memories"
					height="40px"
				/>
			</Link>
			<Toolbar sx={classes.toolbar}>
				{user?.result ? (
					<Box sx={classes.profile}>
						<Avatar
							sx={classes.purple}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography sx={classes.userName} variant="h6">
							{user?.result.name}
						</Typography>
						<Button
							variant="contained"
							sx={classes.logout}
							color="secondary"
							onClick={logout}
						>
							Logout
						</Button>
					</Box>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
					>
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
