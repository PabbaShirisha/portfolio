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
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Training = () => {
  const trainings = [
    {
      title: "Java Full Stack Trainee",
      company: "Codegnan IT Solutions",
      duration: "April 2024 – Aug 2025",
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
  ];

  return (
    <Box
      id="training"
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
        Training
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
        {trainings.map((train, index) => (
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
              <SchoolIcon />
            </Avatar>

            {/* Training Card */}
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
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00f5d4" }}>
                  {train.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#00f5d4", mb: 1 }}>
                  {train.company} | {train.duration}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#cccccc", mb: 2 }}>
                  {train.location}
                </Typography>

                {/* Bullet points */}
                <List sx={{ pl: 2 }}>
                  {train.details.map((point, i) => (
                    <ListItem
                      key={i}
                      sx={{ display: "list-item", color: "#a9a9a9", py: 0.5 }}
                    >
                      {point}
                    </ListItem>
                  ))}
                </List>

                {/* Technologies Chips */}
                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {train.technologies.map((tech, i) => (
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
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Training;