export default {
	paper: (theme) => ({
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(2),
	}),
	root: (theme) => ({
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	}),
	avatar: (theme) => ({
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	}),
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: 3,
	},
	submit: (theme) => ({
		margin: theme.spacing(3, 0, 2),
	}),
	googleButton: (theme) => ({
		marginBottom: theme.spacing(2),
	}),
};
