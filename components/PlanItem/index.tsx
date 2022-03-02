import { Box, Typography, Button } from "@mui/material";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function FeatureCheckbox() {
  return (
    <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM15.7071 9.29289C15.3166 8.90237 14.6834 8.90237 14.2929 9.29289L11 12.585L9.70711 11.2929L9.6129 11.2097C9.22061 10.9047 8.65338 10.9324 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L10.2929 14.7071L10.3871 14.7903C10.7794 15.0953 11.3466 15.0676 11.7071 14.7071L15.7071 10.7071L15.7903 10.6129C16.0953 10.2206 16.0676 9.65338 15.7071 9.29289Z"
          fill="#5D5AFF"
        />
      </svg>
      <Typography variant="caption">Feature....</Typography>
    </Box>
  );
}

interface PlanItemProps {
  title: string;
  description: string;
  price: number;
  selected?: boolean;
  onSelect?: () => void;
  unit?: string;
}

export default function PlanItem({
  title,
  description,
  price,
  selected = false,
  onSelect,
  unit = "monthly",
}: PlanItemProps) {
  return (
    <Box
      sx={{
        p: "48px",
        width: 380,
        background: "#FCFCFC",
        boxShadow:
          "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Typography variant="body" sx={{ fontWeight: "700" }}>
        {title}
      </Typography>
      <Typography variant="caption" sx={{ color: "#757575" }}>
        {description}
      </Typography>
      <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <Typography variant="headline-2" sx={{ fontWeight: "700" }}>
          {formatter.format(unit === "monthly" ? price : price * 12)}
        </Typography>
        <Typography variant="body" sx={{ color: "#757575" }}>
          {unit === "monthly" ? "/mo" : "/yr"}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: 36, borderRadius: "6px", padding: "8px 16px" }}
          onClick={onSelect}
        >
          <Typography variant="button-3">
            {selected ? "Change Selection" : "Select Package"}
          </Typography>
        </Button>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            background: "#E0E0E0",
          }}
        />
        <Typography variant="xsmall" sx={{ fontWeight: 700 }}>
          WHAT&apos;S INCLUDED...
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Just for design for now... */}
          <FeatureCheckbox />
          <FeatureCheckbox />
          <FeatureCheckbox />
          <FeatureCheckbox />
        </Box>
      </Box>
    </Box>
  );
}
