import { Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import "./markdown.css";

const Markdown = ({ content }) => {
  const disallowed = ["image"];

  return (
    <Typography component="span">
      <ReactMarkdown
        style={{ "&p": { margin: 0 } }}
        disallowedElements={disallowed}
        skipHtml
        children={content}
      />
    </Typography>
  );
};

export default Markdown;
