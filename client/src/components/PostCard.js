import {
  Avatar,
  Button,
  Card,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import ContentDetails from "./ContentDetails";

import LikeBox from "./LikeBox";
import PostContentBox from "./PostContentBox";
import HorizontalStack from "./util/HorizontalStack";

import {} from "react-icons/ai";

const PostCard = (props) => {
  const { preview, post } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isAuthor = isLoggedIn().username === post.poster.username;

  const theme = useTheme();
  const [editing, setEditing] = useState(false);

  const handleDeletePost = async (e) => {
    e.stopPropagation();

    setLoading(true);
    const data = await deletePost(post._id, isLoggedIn());
    setLoading(false);
    navigate("/");
  };

  return (
    <Card sx={{ padding: 0 }}>
      <HorizontalStack spacing={0} alignItems="initial">
        <Box
          padding={theme.spacing(1)}
          sx={{ backgroundColor: "grey.100", width: "50px" }}
        >
          <LikeBox likeCount={post.likeCount} />
        </Box>
        <PostContentBox clickable={preview} post={post}>
          <HorizontalStack>
            <ContentDetails
              username={post.poster.username}
              createdAt={post.createdAt}
            />
            <Box>
              {isAuthor && (
                <HorizontalStack>
                  <IconButton disabled={loading} onClick={handleDeletePost}>
                    <AiFillDelete />
                  </IconButton>
                </HorizontalStack>
              )}
            </Box>
          </HorizontalStack>

          <Typography variant="h5" gutterBottom sx={{ overflow: "hidden" }}>
            {post.title}
          </Typography>

          {preview !== "secondary" &&
            (editing ? (
              <div>Editing</div>
            ) : (
              <Typography gutterBottom>{post.content}</Typography>
            ))}

          <HorizontalStack>
            <AiFillMessage />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {post.commentCount}
            </Typography>
          </HorizontalStack>
        </PostContentBox>
      </HorizontalStack>
    </Card>
  );
};

export default PostCard;
