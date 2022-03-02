import React from "react"

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "colossus-140": React.CSSProperties;
    "headline-1": React.CSSProperties;
    "headline-2": React.CSSProperties;
    "button-3": React.CSSProperties;
    body: React.CSSProperties;
    xsmall: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "colossus-140"?: React.CSSProperties;
    "headline-1"?: React.CSSProperties;
    "headline-2"?: React.CSSProperties;
    "button-3"?: React.CSSProperties;
    body?: React.CSSProperties;
    xsmall?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "colossus-140": true;
    "headline-1": true;
    "headline-2": true;
    "button-3": true;
    body: true;
    xsmall: true;
  }
}
