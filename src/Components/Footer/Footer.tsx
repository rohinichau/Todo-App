import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#ed6c02",

        p: 3,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" sx={{ color: "white" }} align="center">
          {"Copyright © 2023"}
        </Typography>
      </Container>
    </Box>
  );
}
