import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  background: "#F5F5F5",
  padding: "1px",
  "& .MuiToggleButtonGroup-grouped": {
    border: 0,
    margin: 0,
    "&:not(:first-of-type)": {
      borderRadius: "5px",
      marginLeft: "4px",
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
    "&:hover": {
      background: theme.palette.primary.dark,
      color: "white",
    },
  },
}));

interface ToggleProps {
  value: string;
  setValue: (value: string) => void;
}

export default function Toggle({ value, setValue }: ToggleProps) {
  return (
    <StyledToggleButtonGroup
      value={value}
      exclusive
      onChange={(event, value) => {
        setValue(value);
      }}
      aria-label="subscription interval"
      data-aos="fade-right"
    >
      <StyledToggleButton value="monthly" aria-label="monthly">
        <Typography variant="button-3">Monthly Billing</Typography>
      </StyledToggleButton>
      <StyledToggleButton value="yearly" aria-label="yearly">
        <Typography variant="button-3">Yearly Billing</Typography>
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
}
