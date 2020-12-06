import React from "react";
import { Box } from "theme-ui";
import SiteHeader from "./SiteHeader";

const SiteWrapper = ({ showClose, closePageLink, children }) => (
  <Box p={[3, 4, 4]} sx={{ maxWidth: "1900px", m: "0 auto" }}>
    <SiteHeader showClose={showClose} closePageLink={closePageLink} />
    {children}
  </Box>
);

export default SiteWrapper;
