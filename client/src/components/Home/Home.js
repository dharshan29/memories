import { ClassNames } from "@emotion/react";
import {
	AppBar,
	Autocomplete,
	Button,
	Chip,
	Container,
	FormControl,
	Grid,
	Grow,
	Paper,
	TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Form from "../Form/Form";
import Pagination from "../Pagination";
import Posts from "../Posts/Posts";
import classes from "./styles";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Home = () => {
	const dispatch = useDispatch();

	const [currentId, setCurrentId] = useState(null);
	const [search, setSearch] = useState("");
	const [tags, setTags] = useState([]);

	const query = useQuery();
	const navigate = useNavigate();
	const page = query.get("page") || 1;
	const searchQuery = query.get("searchQuery");

	const handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			searchPost();
		}
	};

	const searchPost = () => {
		if (search.trim() || tags) {
			dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
			navigate(
				`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
			);
		} else {
			navigate("/");
		}
	};

	const handleDelete = (tagDelete) =>
		setTags(tags.filter((tag) => tag !== tagDelete));
	return (
		<Grow in>
			<Container maxWidth="xl">
				<Grid
					container
					justifyContent="space-between"
					alignItems="stretch"
					spacing={3}
					sx={classes.gridContainer}
				>
					<Grid item xs={12} sm={6} md={9}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<AppBar sx={classes.appBarSearch} position="static" color="inherit">
							<TextField
								name="search"
								variant="outlined"
								label="Search Memories"
								onKeyPress={handleKeyPress}
								fullWidth
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<Autocomplete
								multiple
								id="tags-filled"
								sx={{ margin: "10px 0" }}
								options={[]}
								freeSolo
								value={tags}
								renderTags={(value, getTagProps) =>
									value.map((option, index) => (
										<Chip
											variant="outlined"
											label={option}
											{...getTagProps({ index })}
											onDelete={() => handleDelete(option)}
										/>
									))
								}
								renderInput={(params) => (
									<TextField
										{...params}
										variant="outlined"
										label="Search Tags"
									/>
								)}
								onChange={(e) => {
									if (e.target.value) setTags([...tags, e.target.value]);
								}}
							/>
							<Button
								onClick={searchPost}
								sx={classes.searchButton}
								color="primary"
								variant="contained"
							>
								Search
							</Button>
						</AppBar>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
						{!searchQuery && !tags.length && (
							<Paper elevation={6} sx={classes.pagination}>
								<Pagination page={page} />
							</Paper>
						)}
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
