import { BouncingSkeleton } from "../styles/StyledComponents";
import logo1 from "../../Images/Logo1.png";
import logo4 from "../../Images/Logo4.png";
import { Box } from "@mui/system";

import { keyframes } from "@emotion/react";
import { Stack } from "@mui/material";

const spin = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const LayoutLoader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2E1437",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          position: "relative",
          perspective: "1000px",
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            position: "absolute",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            animation: `${spin} 2s infinite linear`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backfaceVisibility: "hidden",
            }}
          >
            <img src={logo1} alt="Logo" style={{ width: "100px" }} />
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={logo4}
              alt="Logo4"
              style={{
                height: "100px",
                // paddingLeft: "-100px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const TypingLoader = () => {
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.1s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.2s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.4s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.6s",
        }}
      />
    </Stack>
  );
};

export { TypingLoader, LayoutLoader };
