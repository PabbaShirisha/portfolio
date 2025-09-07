// src/components/Projects.js
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from "@mui/material";

const Projects = () => {
  const projects = [
    {
      title: "Freelancing Platform for Chefs",
      description:
        "This is a platform for chefs to find freelance work. Chefs can create profiles, showcase their skills and experience, and users can connect with the chefs based on the availability and food items",
      tech: ["React", "Node.js", "MUI", "MongoDB", "Express.js,"],
      github: "https://github.com/PabbaShirisha?tab=repositories",
      demo: "https://cheffreelance.netlify.app/",
    },
    // {
    //   title: "Event Management System",
    //   description:
    //   "This is a web-based platform for event management where creators can register, log in, and manage events, while attendees can browse and join events. It features event filtering, secure Role-Based Access Control (RBAC), and a responsive Material-UI interface.",
    //   tech: ["JavaScript","MUI", "React", "Node.js", "Express.js","MongoDB"],
    //   github: "https://github.com/PabbaShirisha?tab=repositories",
    //   demo: "#",
    // },
    {
      title: "DigiMenu - Digital Menu System",
      description:
        "This is a full-stack digital menu system that replaces traditional menus with a QR-code-based solution. It features role-based authentication for admins to manage menu items and availability, secure Stripe payment integration, and a responsive Material-UI interface for mobile-friendly access.",
      tech: ["JavaScript","MUI", "React", "Node.js", "Express.js","MongoDB"],
      github: "https://github.com/PabbaShirisha?tab=repositories",
      demo: "#",
    },
  ];

  return (
    <Box
      id="projects"
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
        sx={{ color: "#00f5d4", fontWeight: "bold", mb: 6 }}
      >
        Projects
      </Typography>

      <Stack spacing={5}>
        {projects.map((proj, index) => (
          <Card
            key={index}
            sx={{
              background: "#1a1a1a",
              border: "1px solid #00f5d4",
              borderRadius: "12px",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 0px 20px #00f5d4",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#00f5d4", fontWeight: "bold" }}
              >
                {proj.title}
              </Typography>

              <Typography variant="body2" sx={{ color: "#a9a9a9", mb: 2 }}>
                {proj.description}
              </Typography>

              {/* Tech Stack as Chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                {proj.tech.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    sx={{
                      background: "#0d1117",
                      border: "1px solid #00f5d4",
                      color: "#00f5d4",
                      fontSize: "0.8rem",
                    }}
                  />
                ))}
              </Stack>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#00f5d4",
                    color: "#00f5d4",
                    textTransform: "none",
                  }}
                  href={proj.github}
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#00f5d4",
                    color: "#0d1117",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#00e0c3" },
                  }}
                  href={proj.demo}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;




// // src/components/Projects.js
// import React from "react";
// import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Freelancing Platform for Chefs",
//       description: "A web application that connects chefs with clients for personalized culinary services.",
//       tech: "React, Node.js, MongoDB, Express",
//       github: "https://github.com/PabbaShirisha?tab=repositories",
//       demo: "https://cheffreelance.netlify.app/"
//     },
//     {
//       title: "Bank Card Management System",
//       description: "An app to manage multiple banks and credit/debit cards with authentication.",
//       tech: "React, Node.js, MongoDB",
//       github: "#",
//       demo: "#"
//     }
//   ];

//   return (
//     <Box
//       id="projects"
//       sx={{ background: "#0d1117", color: "white", py: 10, px: { xs: 3, md: 8 } }}
//     >
//       <Typography variant="h4" align="center" gutterBottom sx={{ color: "#00f5d4" }}>
//         Projects
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {projects.map((proj, index) => (
//           <Grid item xs={12} md={6} key={index}>
//             <Card sx={{ background: "#1a1a1a", border: "1px solid #00f5d4" }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>{proj.title}</Typography>
//                 <Typography variant="body2" sx={{ color: "#a9a9a9", mb: 2 }}>
//                   {proj.description}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#00f5d4", mb: 2 }}>
//                   Tech: {proj.tech}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   size="small"
//                   sx={{ mr: 2, borderColor: "#00f5d4", color: "#00f5d4" }}
//                   href={proj.github}
//                   target="_blank"
//                 >
//                   GitHub
//                 </Button>
//                 <Button
//                   variant="contained"
//                   size="small"
//                   sx={{ backgroundColor: "#00f5d4", color: "#0d1117" }}
//                   href={proj.demo}
//                   target="_blank"
//                 >
//                   Live Demo
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Projects;
