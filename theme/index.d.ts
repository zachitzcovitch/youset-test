import React from "react"

declare module '@mui/material/styles' {
  interface TypographyVariants {
    "colossus-140": React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "colossus-140"?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    "colossus-140": true;
  }
}