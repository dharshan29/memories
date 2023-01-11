export default {
	appBarSearch: {
		borderRadius: "4px",
		marginBottom: "1rem",
		display: "flex",
		padding: "16px",
	},
	pagination: {
		borderRadius: "4px",
		marginTop: "1rem",
		padding: "16px",
	},
	gridContainer: (theme) => ({
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column-reverse",
		},
	}),
};
