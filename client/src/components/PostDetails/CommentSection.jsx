import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import classes from "./styles";

const CommentSection = ({ post }) => {
	const [comments, setComments] = useState(post?.comments);
	const [comment, setComment] = useState("");
	const user = JSON.parse(localStorage.getItem("profile"));
	const dispatch = useDispatch();
	const commentsRef = useRef();

	const handleClick = async () => {
		const finalComment = `${user.result.name}: ${comment}`;

		const newComments = await dispatch(commentPost(finalComment, post._id));
		console.log(newComments);

		setComments(newComments);
		setComment("");

		commentsRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<div style={classes.commentsOuterContainer}>
				<div style={classes.commentsInnerContainer}>
					<Typography gutterBottom variant="h6">
						Comments
					</Typography>
					{comments?.map((c, i) => (
						<Typography key={i} gutterBottom variant="subtitle1">
							<strong>{c.split(": ")[0]}</strong>
							{c.split(":")[1]}
						</Typography>
					))}
					<div ref={commentsRef} />
				</div>
				{user?.result?.name && (
					<div style={{ width: "70%" }}>
						<Typography gutterBottom variant="h6">
							Write a Comment
						</Typography>
						<TextField
							fullWidth
							rows={4}
							variant="outlined"
							label="Comment"
							multiline
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
						<Button
							sx={{ marginTop: "10px" }}
							fullWidth
							disabled={!comment}
							variant="contained"
							onClick={handleClick}
						>
							Comment
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CommentSection;
