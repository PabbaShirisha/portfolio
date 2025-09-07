// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ background: "#0d1117", boxShadow: "none", borderBottom: "1px solid #1f2937" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#00f5d4",
            fontFamily: "monospace",
          }}
        >
          {"<Shirisha/>"}
        </Typography>

        {/* Navigation Links */}
        <Box>
          {["About", "Education", "Skills", "Projects", "Experiences", "Contact"].map((section) => (
            <Button
              key={section}
              sx={{ color: "#ffffff", "&:hover": { color: "#00f5d4" } }}
              href={`#${section.toLowerCase()}`}
            >
              {section}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;