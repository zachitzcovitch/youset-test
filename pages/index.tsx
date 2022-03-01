import type { NextPage } from "next";

import {
  Box,
  Button,
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  background: "#F5F5F5",
  padding: "1px",
  "& .MuiToggleButtonGroup-grouped": {
    border: 0,
    margin: 0,
    "&:not(:first-of-type)": {
      borderRadius: "5px",
      marginLeft: "8px",
    },
    "&:first-of-type": {
      borderRadius: "5px",
    },
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "5px",
  padding: "14px 24px",
  height: 48,
  color: "#757575",
  "&.Mui-selected": {
    background: theme.palette.primary.main,
    color: "white",
    borderRadius: "5px",
  },
}));

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        pt: "110px",
      }}
    >
      <Container sx={{ maxWidth: 1440, p: "0px 118px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            variant="headline-1"
            sx={{ fontWeight: "400", color: "#171717" }}
          >
            Pick the plan thats right for you.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body" sx={{ color: "#757575" }}>
              A tremor in the Force. The last time I felt it was in the presence
              of my old master.
            </Typography>
            <Typography variant="body" sx={{ color: "#757575" }}>
              Don&apos;t act so surprised, Your Highness. You weren&apos;t on
              any mercy mission this time.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: "57px" }}>
          <StyledToggleButtonGroup
            value="left"
            exclusive
            //onChange={handleAlignment}
            aria-label="text alignment"
          >
            <StyledToggleButton value="left" aria-label="left aligned">
              <Typography variant="button-3">Monthly Billing</Typography>
            </StyledToggleButton>
            <StyledToggleButton value="center" aria-label="centered">
              <Typography variant="button-3">Yearly Billing</Typography>
            </StyledToggleButton>
          </StyledToggleButtonGroup>
        </Box>
        <Box sx={{ mt: "56px" }}>PRICES BISH</Box>
      </Container>
    </Box>
  );
};

export default Home;
