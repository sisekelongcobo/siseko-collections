import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: "#f5f5f5" }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Siseko Collections
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          Welcome to Siseko Collections, your number one source for all things
          clothing and footwear. We're dedicated to giving you the very best of
          clothing and footwear, with a focus on quality, customer service, and
          uniqueness.
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2020 by Sisekelo Ngcobo, Siseko Collections has come a long
          way from its beginnings in [starting location]. When Sisekelo Ngccobo
          first started out, their passion for [passion reason, e.g.,
          "eco-friendly products"] drove them to [action: quit day job, do tons
          of research, etc.] so that Siseko Collections can offer you
          [competitive differentiator: the world's most advanced product, a
          booming online store, etc.]. We now serve customers all over [place:
          the world, the US, the Austin area, etc.], and are thrilled that we're
          able to turn our passion into our own website.
        </Typography>
        <Typography variant="body1" paragraph>
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </Typography>
        <Typography variant="body1" paragraph>
          Sincerely,
        </Typography>
        <Typography variant="body1" paragraph>
          [Founder Name]
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
