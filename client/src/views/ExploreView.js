import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostBar from "../PostBar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBar />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <PostCard preview="primary" />
            <Loading />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;
