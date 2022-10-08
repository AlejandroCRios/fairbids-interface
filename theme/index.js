import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  yellowBrand: {
    50: "#fff4dc",
    100: "#fee0b1",
    200: "#facc82",
    300: "#f7b752",
    400: "#f5a324",
    500: "#db890a",
    600: "#ab6b05",
    700: "#7b4c02",
    800: "#4a2d00",
    900: "#1d0e00",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({ colors, config });
