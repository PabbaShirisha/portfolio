// src/components/Skills.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const skills = [
  { name: "HTML", logo: "/HTML5.png"  },
  { name: "CSS", logo: "/CSS.png" },
  { name: "JavaScript", logo:"/JavaScript.png" },
  { name: "React JS", logo:"/reactjs.png" },
  { name: "Material UI", logo:"/MUI.png" },
  { name: "Node JS", logo:"/nodejs.png" },
  { name: "MongoDB", logo: "/mongodb.png" },
  { name: "Express JS", logo: "expressjs.png" },
  { name: "Java", logo: "/java.png" },
  { name: "GitHub", logo:"/github.png" },
  { name: "VS Code", logo:"/vscode.png" },
  { name: "Eclipse", logo:"/eclipse.png" },

];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        background: "#0d1117",
        color: "white",
        py: 10,
        px: { xs: 3, md: 8 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#00f5d4", fontWeight: "bold", mb: 5 }}
      >
        Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#111",
              borderRadius: "12px",
              padding: "20px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.08)",
                boxShadow: "0 0 15px #00f5d4",
              },
            }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              style={{ width: "60px", marginBottom: "10px" }}
            />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;