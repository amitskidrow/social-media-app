import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserAvatar from "./UserAvatar";

const UserMessengerEntry = (props) => {
  return (
    <>
      <ListItem disablePadding alignItems="flex-start">
        <ListItemButton sx={{ paddingY: 2 }}>
          <ListItemAvatar>
            <UserAvatar height={45} width={45} username={props.username} />
          </ListItemAvatar>
          <ListItemText
            primary={props.username}
            secondary="Sent you a message - 1 day ago"
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default UserMessengerEntry;