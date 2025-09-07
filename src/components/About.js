// src/components/About.js
import React from "react";
import { Box, Typography, Button, Avatar, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        background: "#0d1117",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 8 },
        pt: 10,
        gap: 5,
      }}
    >
      {/* Left: Text Section */}
      <Box flex={1}>
        <Typography variant="h4" gutterBottom>
          <b>Shirisha Pabba</b>
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: "#00f5d4", fontWeight: "bold" }}
          gutterBottom
        >
          Full Stack Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 3, color: "#a9a9a9", maxWidth: "600px" }}
        >
          I am a passionate and results-driven Full Stack Developer
          with experience in building scalable, user-focused web
          applications using React.js, Node.js, Express, and MongoDB.
          I am skilled in developing responsive UIs, RESTful APIs,
          and real-time features. I work effectively in Agile environments
          and focus on delivering production-ready solutions.
          I am committed to continuous learning, collaboration, and
          creating impactful results aligned with business goals.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00f5d4",
              color: "#0d1117",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#00c9a7" },
            }}
            href="/shirisha_pabba_resume.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#00f5d4",
              color: "#00f5d4",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#00f5d4", color: "#0d1117" },
            }}
            href="mailto:pabbashirisha9989@gmail.com"
          >
            Contact Me
          </Button>
        </Box>

        {/* Social Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/PabbaShirisha"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#a9a9a9", "&:hover": { color: "#00f5d4" } }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/shirisha-pabba-b7a921308"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#a9a9a9", "&:hover": { color: "#00f5d4" } }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:pabbashirisha9989@gmail.com"
            sx={{ color: "#a9a9a9", "&:hover": { color: "#00f5d4" } }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Right: Profile Image */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          src="/portfolio_photo.png"
          alt="Shirisha Pabba"
          sx={{
            width: { xs: 220, sm: 250, md: 300 },
            height: { xs: 220, sm: 250, md: 300 },
            border: "5px solid #00f5d4",
            borderRadius: "50%",
            boxShadow: "0px 0px 40px #00f5d4",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;