export default {
	heading: {
		color: "rgba(0,183,255, 1)",
	},
	image: {
		marginLeft: "15px",
	},
	mainContainer: (theme) => ({
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column-reverse",
		},
	}),
};
