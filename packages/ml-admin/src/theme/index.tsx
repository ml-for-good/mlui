import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import creator from './creator'

interface IProps {
  rootElement: HTMLElement;
  children?: React.ReactNode;
}

const Theme: React.FC<IProps> = (props) => {
  const { rootElement, children } = props;
  const theme = creator(rootElement)
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
