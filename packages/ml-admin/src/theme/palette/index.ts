import { red } from "@mui/material/colors";
import type {PaletteOptions } from "@mui/material/styles";

export default function createThemePalette(): PaletteOptions {
  // A custom theme for this app
  const palette: PaletteOptions = {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  };

  return palette
}