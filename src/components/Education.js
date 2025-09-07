// src/components/Education.js
import React from "react";
import { Box, Typography, Card, CardContent, Grid, Avatar, Chip, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Kakatiya University",
            year: "2021 - 2025",
            coursework: ["Java", "Data Structures", "Software Engineering", "Database Management"],
        },
    ];

    return (
        <Box
            id="education"
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
                Education
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {educationData.map((edu, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card
                            sx={{
                                background: "#1a1a1a",
                                border: "1px solid #00f5d4",
                                borderRadius: "16px",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0px 0px 25px #00f5d4",
                                },
                            }}
                        >
                            <CardContent>
                                {/* Icon + Degree */}
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                    <Avatar sx={{ bgcolor: "#00f5d4", mr: 2 }}>
                                        <SchoolIcon sx={{ color: "#0d1117" }} />
                                    </Avatar>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: '1.1rem', md: '1.3rem' }, color: "#a9a9a9" }}>
                                        {edu.degree}
                                    </Typography>
                                </Box>

                                {/* Institution + Year */}
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: "#a9a9a9", mb: 2, fontWeight: "500" }}
                                >
                                    {edu.institution} | {edu.year}
                                </Typography>

                                {/* Coursework */}
                                <Typography variant="subtitle2" sx={{ color: "#00f5d4", mb: 1, fontWeight: "bold" }}>
                                    Coursework
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {edu.coursework.map((course, idx) => (
                                        <Chip
                                            key={idx}
                                            label={course}
                                            sx={{
                                                backgroundColor: "#0d1117",
                                                border: "1px solid #00f5d4",
                                                color: "#00f5d4",
                                                mb: 1,
                                                borderRadius: "12px",
                                                fontWeight: "500",
                                                padding: "5px 10px",
                                                transition: "all 0.3s ease",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    backgroundColor: "#00f5d4",
                                                    color: "#0d1117",
                                                    boxShadow: "0px 0px 10px #00f5d4",
                                                },
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Education;