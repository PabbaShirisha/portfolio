// src/components/Experiences.js
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  Chip,
  Stack,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const Experiences = () => {
  const experiences = [
    {
      type: "training",
      role: "Java Full Stack Trainee",
      company: "Codegnan IT Solutions",
      duration: "April 2025 – Present",
      location: "Hyderabad",
      details: [
        "Completed training in Core Java with focus on OOPs concepts, and problem-solving.",
        "Currently undergoing hands-on training in Advanced Java, JDBC, Spring, Spring Boot, Hibernate, REST APIs.",
      ],
      technologies: [
        "Core Java",
        "Advanced Java",
        "JDBC",
        "Spring",
        "Spring Boot",
        "Hibernate",
        "REST APIs",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Inventive Bay Technologies",
      duration: "April 2024 – August 2025",
      location: "Remote",
      details: [
        "Gained hands-on experience in Full Stack development using HTML, CSS, JavaScript, React.js, Next.js, Zod, Node.js, and MongoDB.",
        "Contributed to a real-time project focused on building scalable and responsive web applications.",
        "Actively involved in debugging, unit testing, testing, and delivering efficient frontend and backend solutions using the MERN stack.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Zod",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      role: "AI Tool Intern",
      company: "Zen Technologies Pvt Ltd",
      duration: "May 2023 – June 2023",
      location: "Hyderabad, Telangana",
      details: [
        "Completed a 45-day internship focused on building applications using Microsoft Power Apps.",
        "Developed chatbots and customized forms tailored to specific organizational workflows.",
        "Designed a virtual website framework using Canva to improve team productivity.",
      ],
      technologies: ["Canva", "Microsoft Power Apps"],
    },
  ];

  return (
    <Box
      id="experiences"
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
        Experiences
      </Typography>

      <Box
        sx={{
          position: "relative",
          ml: { xs: 2, md: 8 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 22,
            width: "2px",
            height: "100%",
            background: "#00f5d4",
          },
        }}
      >
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ mb: 6, position: "relative" }}>
            {/* Dot with icon */}
            <Avatar
              sx={{
                bgcolor: "#00f5d4",
                color: "#0d1117",
                position: "absolute",
                left: -10,
                top: 5,
                boxShadow: "0px 0px 15px #00f5d4",
              }}
            >
              <WorkIcon />
            </Avatar>

            {/* Experience Card */}
            <Card
              sx={{
                ml: 6,
                background: "#1a1a1a",
                border: "1px solid #00f5d4",
                borderRadius: "12px",
                p: 2,
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
                  sx={{ fontWeight: "bold", color: "#00f5d4" }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00f5d4", mb: 1 }}
                >
                  {exp.company} | {exp.duration}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#cccccc", mb: 2 }}
                >
                  {exp.location}
                </Typography>

                {/* Bullet points */}
                <List sx={{ pl: 2 }}>
                  {exp.details.map((point, i) => (
                    <ListItem
                      key={i}
                      sx={{ display: "list-item", color: "#a9a9a9", py: 0.5 }}
                    >
                      {point}
                    </ListItem>
                  ))}
                </List>

                {/* Technologies as Chips */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  mt={2}
                >
                  {exp.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        background: "#00f5d4",
                        color: "#0d1117",
                        fontWeight: "bold",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experiences;
