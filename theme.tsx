import { Anchor, createTheme } from "@mantine/core";
import classes from "./Theme.module.css";

export const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      classNames: { root: classes.link },
    }),
  },
});
