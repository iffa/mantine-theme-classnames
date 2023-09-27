import { Anchor, Stack } from "@mantine/core";
import Link from "next/link";
import classes from "./Index.module.css";

export default function Home() {
  return (
    <Stack>
      <Anchor component={Link} href="/">
        Foo bar.
      </Anchor>
      <Anchor component={Link} href="/" className={classes.link}>
        Foo bar with class.
      </Anchor>
    </Stack>
  );
}
