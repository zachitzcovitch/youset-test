import * as React from "react";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "colossus-140": React.CSSProperties;
    "headline-1": React.CSSProperties;
    "button-3": React.CSSProperties;
    body: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "colossus-140"?: React.CSSProperties;
    "headline-1"?: React.CSSProperties;
    "button-3"?: React.CSSProperties;
    body?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "colossus-140": true;
    "headline-1": true;
    "button-3": true;
    body: true;
  }
}

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#5D5AFF",
    },
    secondary: {
      main: "#232323",
    },
  },
  typography: {
    fontFamily: "Inter",
    button: {
      textTransform: "none",
    },
    "colossus-140": {
      fontFamily: "Inter",
      fontSize: "140px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "144px",
      letterSpacing: "0px",
      textAlign: "left",
    },
    "headline-1": {
      fontFamily: "Inter",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "60px",
      letterSpacing: "0px",
      textAlign: "left",
    },
    caption: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0px",
      textAlign: "left",
    },
    body: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "32px",
      letterSpacing: "0px",
      textAlign: "left",
    },
    "button-3": {
      fontFamily: "Inter",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "20px",
      letterSpacing: "0px",
      textAlign: "left",
    },
  },
});

interface ThemeList {
  [name: string]: Theme;
}

export const themes: ThemeList = { mainTheme };

interface ThemeProviderProps {
  themeName?: string;
  children: React.ReactNode;
}

export default function CustomProvider({
  themeName = "mainTheme",
  children,
}: ThemeProviderProps) {
  return (
    <ThemeProvider
      theme={
        Object.keys(themes).includes(themeName)
          ? themes[themeName]
          : themes["mainTheme"]
      }
    >
      {children}
    </ThemeProvider>
  );
}
