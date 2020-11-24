import React from "react";
import { Grid } from "theme-ui";

function Masonry({ children }) {
  return (
    <Grid
      sx={{
        lineHeight: 0,
        gridAutoRows: "1fr",
        gridTemplateColumns: "repeat(6, 1fr)",
        img: {
          width: "100% !important",
          height: "auto !important",
        },
        "&:before": {
          content: "",
          height: 0,
          width: "100%",
          pb: "100%",
        },
      }}
    >
      {children}
    </Grid>
  );
}

export default Masonry;
