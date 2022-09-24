import type { Components, Theme } from "@mui/material/styles";

type ThemeComponents = Components<Omit<Theme, "components">>;

export default function createThemeComponents(
  rootElement: HTMLElement
): ThemeComponents {
  // All `Portal`-related components need to have the the main app wrapper element as a container
  // so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
  const components: Components<Omit<Theme, "components">> = {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  };

  return components;
}
