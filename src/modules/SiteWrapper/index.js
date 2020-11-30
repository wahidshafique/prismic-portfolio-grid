import React from "react";
import { Box } from "theme-ui";
import SiteHeader from "./SiteHeader";

const SiteWrapper = ({ showClose, closePageLink, children }) => (
  <Box p={[3, 4, 4]}>
    <SiteHeader showClose={showClose} closePageLink={closePageLink} />
    {children}
  </Box>
);

export default SiteWrapper;
