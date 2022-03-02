import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const StyledTextField = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export interface StyledInputProps {
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  inputProps?: any;
  error?: string;
}

export default function StyledInput({
  value,
  onChange,
  label,
  placeholder = "",
  name,
  type = "text",
  inputProps = {},
  error,
}: StyledInputProps) {
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink htmlFor="name">
        <Typography
          variant="body"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: "700",
            lineHeight: "32px",
          }}
        >
          {label}
        </Typography>
      </InputLabel>
      <StyledTextField
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        fullWidth
        {...inputProps}
      />
      {!!error && (
        <FormHelperText id="component-error-text">{error}</FormHelperText>
      )}
    </FormControl>
  );
}
