import { deepPurple } from "@mui/material/colors";

export default {
	appBar: (theme) => ({
		borderRadius: "15px",
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 50px",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	}),
	heading: (theme) => ({
		color: theme.palette.primary.main,
		textDecoration: "none",
		fontSize: "2em",
		fontWeight: 300,
	}),
	image: {
		marginLeft: "10px",
		marginTop: "5px",
	},
	toolbar: (theme) => ({
		display: "flex",
		justifyContent: "flex-end",
		width: "400px",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
		},
	}),
	profile: (theme) => ({
		display: "flex",
		justifyContent: "space-between",
		width: "400px",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
			marginTop: "20px",
			justifyContent: "center",
		},
	}),
	purple: (theme) => ({
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	}),
	logout: {
		marginLeft: "20px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
		textAlign: "center",
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
	},
};
