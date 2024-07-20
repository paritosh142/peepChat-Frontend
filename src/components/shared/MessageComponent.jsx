import { Typography, Box } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachment = [], createdAt } = message;
  const sameSender = sender._id === user._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <Box
      sx={{
        display: "inline-block",
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#2E1437" : "#F0F0F0",
        borderRadius: "8px",
        padding: "8px",
        maxWidth: "50%",
        wordBreak: "break-word",
        margin: "4px 8px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        fontSize: "14px",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography
          variant="subtitle2"
          style={{ fontWeight: "600", marginBottom: "4px" }}
          color={"#2E1437"}
        >
          {sender.name}
        </Typography>
      )}
      {content && (
        <Typography
          variant="body2"
          style={{
            marginBottom: "4px",
            color: sameSender ? "white" : "#2E1437",
          }}
        >
          {content}
        </Typography>
      )}

      {attachment.length > 0 &&
        attachment.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: sameSender ? "white" : "#2E1437",
                }}
              >
                {RenderAttachment({ file, url })}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={sameSender ? "gray" : "#2E1423"}>
        {timeAgo}
      </Typography>
    </Box>
  );
};

export default memo(MessageComponent);
