/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";

const ChatItem = ({
  avatar = [],
  name = "",
  _id = "",
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert = { count: 0 },
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      sx={{
        textDecoration: "none",
        color: "inherit",
        padding: "0",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
          padding: "1rem",
        }}
      >
        <AvatarCard avatar={avatar} />

        <Stack sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 500, color: "#fffff" }}>
            {name}
          </Typography>
          {newMessageAlert.count > 0 && (
            <Typography variant="caption" sx={{ color: "error.main" }}>
              {newMessageAlert.count} New Message
            </Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              position: "absolute",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "success.main",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

const final = memo(ChatItem);

export default final;
