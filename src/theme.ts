import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
    primaryColor: 'violet'
});
export const vars = themeToVars(theme);
