export default {
	media: {
		borderRadius: "20px",
		objectFit: "cover",
		width: "100%",
		maxHeight: "600px",
	},
	card: (theme) => ({
		display: "flex",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			flexDirection: "column",
		},
	}),
	section: {
		borderRadius: "20px",
		margin: "10px",
		flex: 1,
	},
	imageSection: (theme) => ({
		marginLeft: "20px",
		width: "30%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
		},
	}),
	recommendedPosts: (theme) => ({
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	}),
	loadingPaper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "20px",
		borderRadius: "15px",
		height: "39vh",
	},
	commentsOuterContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	commentsInnerContainer: {
		height: "200px",
		overflowY: "auto",
		marginRight: "30px",
	},
};
