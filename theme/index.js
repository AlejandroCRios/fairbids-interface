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
  fairPurple: {
    50: "#ffe7ff",
    100: "#f3bff3",
    200: "#e897e7",
    300: "#de6edc",
    400: "#912190",
    500: "#912190",
    600: "#912190",
    700: "#681667",
    800: "#400c3f",
    900: "#1a0218",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors,
  config,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});
