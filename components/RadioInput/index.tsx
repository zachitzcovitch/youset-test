import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioInputProps {
  name: string;
  value?: string;
  label?: string;
  options?: RadioOption[];
  onChange?: (value: string) => void;
}

export default function RadioInput({
  name,
  label,
  value,
  options = [],
  onChange,
}: RadioInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel id={`${name}-input`}>{label}</FormLabel>}
      <RadioGroup
        aria-labelledby={`${name}-input`}
        value={value || options[0]?.value}
        name={name}
        onChange={(event, value) => {
          if (onChange) onChange(value);
        }}
      >
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
