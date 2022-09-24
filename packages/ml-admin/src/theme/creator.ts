import { createTheme } from "@mui/material/styles";
import createThemeComponents from "./components";
import createThemePalette from "./palette";

export default function creator(rootElement: HTMLElement) {
  const palette = createThemePalette();
  const components = createThemeComponents(rootElement);
  return createTheme({ palette, components });
}
