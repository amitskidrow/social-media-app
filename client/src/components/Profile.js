import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { isLoggedIn } from "../helpers/authHelper";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Footer from "./Footer";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  const user = profile && profile.user;
  const currentUser = isLoggedIn();
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;

  useEffect(() => {
    setProfile(props.profile);
  }, [props.profile]);

  return (
    <Card>
      {profile ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={user.username} />
          </Box>

          <Typography variant="h5">{user.username}</Typography>

          {props.editing ? (
            <Box>
              <ContentUpdateEditor
                handleSubmit={props.handleSubmit}
                originalContent={user.biography}
              />
            </Box>
          ) : user.biography ? (
            <Typography textAlign="center" variant="p">
              <b>Bio: </b>
              {user.biography}
            </Typography>
          ) : (
            <Typography variant="p">
              <i>No bio yet</i>
            </Typography>
          )}

          {user._id === currentUser.userId && (
            <Box>
              <Button
                startIcon={<AiFillEdit color={iconColor} />}
                onClick={props.handleEdit}
              >
                {props.editing ? <>Cancel</> : <>Edit bio</>}
              </Button>
            </Box>
          )}

          <HorizontalStack>
            <Typography color="text.secondary">
              Likes <b>{profile.posts.likeCount}</b>
            </Typography>
            <Typography color="text.secondary">
              Posts <b>{profile.posts.count}</b>
            </Typography>
          </HorizontalStack>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;
