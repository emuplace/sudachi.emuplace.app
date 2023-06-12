import { style } from "@vanilla-extract/css";
import { vars } from "../theme";
import { rem } from "@mantine/core";

export const title = style({
  color: vars.colors.black,
  fontSize: rem(100),
  fontWeight: 900,
  letterSpacing: rem(-2),

  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  "@media": {
    [vars.smallerThan("md")]: {
      fontSize: rem(50),
    },
  },
});
