import {
	Button,
	ButtonBase,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
	Delete,
	MoreHoriz,
	ThumbUpAlt,
	ThumbUpAltOutlined,
} from "@mui/icons-material";
import classes from "./styles";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [likes, setLikes] = useState(post?.likes);

	const user = JSON.parse(localStorage.getItem("profile"));

	const handleLike = async () => {
		dispatch(likePost(post._id));

		if (post.likes.find((like) => like === user?.result?._id)) {
			setLikes(post.likes.filter((id) => id !== user?.result._id));
		} else {
			setLikes([...post.likes, user?.result._id]);
		}
	};

	const Likes = () => {
		if (likes.length > 0) {
			return likes.find((like) => like === user?.result?._id) ? (
				<>
					<ThumbUpAlt fontSize="small" />
					&nbsp;
					{likes.length > 2
						? `You and ${likes.length - 1} others`
						: `${likes.length} like${likes.length > 1 ? "s" : ""}`}
				</>
			) : (
				<>
					<ThumbUpAltOutlined fontSize="small" />
					&nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
				</>
			);
		}

		return (
			<>
				<ThumbUpAltOutlined fontSize="small" />
				&nbsp;Like
			</>
		);
	};

	const openPost = (e) => {
		navigate(`/posts/${post._id}`);
	};
	return (
		<Card sx={classes.card} elevation={6}>
			<ButtonBase sx={classes.cardAction} onClick={openPost}>
				<CardMedia
					sx={classes.media}
					image={post.selectedFile}
					title={post.title}
				/>
				<div style={classes.overlay}>
					<Typography variant="h6">{post.name}</Typography>
					<Typography variant="body2">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
				{user?.result?._id === post?.creator && (
					<div style={classes.overlay2}>
						<Button
							sx={{ color: "white" }}
							size="small"
							onClick={(e) => {
								e.stopPropagation();
								setCurrentId(post._id);
							}}
						>
							<MoreHoriz fontSize="default" />
						</Button>
					</div>
				)}
				<div style={classes.details}>
					<Typography variant="body2" color="textSecondary">
						{post.tags.map((tag) => `#${tag}`)}
					</Typography>
				</div>
				<Typography sx={classes.title} variant="h5">
					{post.title}
				</Typography>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						gutterBottom
					>
						{post.message}
					</Typography>
				</CardContent>
			</ButtonBase>
			<CardActions sx={classes.cardActions}>
				<Button
					size="small"
					color="primary"
					onClick={handleLike}
					disabled={!user?.result}
				>
					<Likes />
				</Button>
				{user?.result?._id === post?.creator && (
					<Button
						size="small"
						color="secondary"
						onClick={() => dispatch(deletePost(post._id))}
					>
						<Delete fontSize="small" />
						Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default Post;
