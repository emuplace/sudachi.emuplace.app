import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Welcome } from "./Welcome/Welcome";
import { ColorSchemeToggle } from "./ColorSchemeToggle/ColorSchemeToggle";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Welcome />
      <ColorSchemeToggle />
    </MantineProvider>
  );
}
