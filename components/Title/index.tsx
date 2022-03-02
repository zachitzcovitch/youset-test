import { Box, Typography } from "@mui/material";

export default function Title() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography
        data-aos="fade-right"
        data-aos-delay="100"
        variant="headline-1"
        sx={{ fontWeight: "400", color: "#171717" }}
      >
        Pick the plan thats right for you.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="body"
          sx={{ color: "#757575" }}
          data-aos="fade-right"
          data-aos-delay="50"
        >
          We&apos;ll help you buy the right home and car insurance, so you can
          protect the things you love.
        </Typography>
      </Box>
    </Box>
  );
}
