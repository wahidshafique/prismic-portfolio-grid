import React from "react";
import { Box } from "theme-ui";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const FadeIn = ({ duration = 300, delay = 0, children, ...delegated }) => {
  return (
    <Box
      {...delegated}
      sx={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
        "@media (prefers-reduced-motion: no-preference)": {
          animationName: fadeIn.toString(),
          animationFillMode: "backwards",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default FadeIn;
