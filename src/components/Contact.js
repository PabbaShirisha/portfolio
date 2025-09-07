// src/components/Contact.js
import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Grid, Alert } from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1d978s",   // from EmailJS dashboard
        "template_u4y32kx",  // from EmailJS dashboard
        form.current,
        "u4rGQ1y56_WBPjV6e"   // from EmailJS dashboard
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error.text);
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{ background: "#0d1117", color: "white", py: 10, px: { xs: 3, md: 8 } }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#00f5d4" }}>
        Contact Me
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Name"
              name="user_name"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#a9a9a9" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Email"
              name="user_email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#a9a9a9" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#a9a9a9" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#00f5d4",
                color: "#0d1117",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#00c9a7" },
              }}
            >
              Send Message
            </Button>
          </form>

          {status === "success" && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Message sent successfully!
            </Alert>
          )}
          {status === "error" && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Oops! Something went wrong. Try again later.
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;