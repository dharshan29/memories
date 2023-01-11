import { LockOutlined } from "@mui/icons-material";
import {
	Avatar,
	Button,
	Container,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
// import { GoogleLogin } from "react-google-login";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
// import Icon from "./icon";

import classes from "./style";
import { signin, signup } from "../../actions/auth";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Auth = () => {
	const [isSignup, setIsSignup] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState(initialState);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignup) {
			dispatch(signup(formData, navigate));
		} else {
			dispatch(signin(formData, navigate));
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};
	// const googleSuccess = async (res) => {
	// 	console.log(res);
	// };
	// const googleFailure = (error) => {
	// 	console.log(error);
	// 	console.log("Google Sign In was unsuccessful. Try Again Later");
	// };
	return (
		<Container component="main" maxWidth="xs">
			<Paper sx={classes.paper} elevation={3}>
				<Avatar sx={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
				<form style={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name="confirmPassword"
								label="Repeat Password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						sx={classes.submit}
					>
						{isSignup ? "Sign Up" : "SIgn In"}
					</Button>
					{/* <GoogleLogin
						clientId="470964429577-acfg95h2ha7v6r4eactdn2ou6sa1g2t1.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								sx={classes.googleButton}
								color="primary"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant="contained"
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy={"single_host_origin"}
					/> */}
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? "Already have an account? Sign In"
									: "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
