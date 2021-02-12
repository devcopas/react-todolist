import "./styles.css";
import { ThemeProvider } from "@emotion/react";
import TodoList from "./pages/TodoList";

export default function App() {
  const theme = {
    color: {
      primary: {
        base: "hsl(193, 95%, 68%)",
        darker: "hsl(193, 95%, 45%)",
        setLightness: (value) => `hsl(193, 95%, ${value}%)`
      },
      secondary: {
        base: "hsl(340, 95%, 68%)",
        darker: "hsl(340, 95%, 60%)",
        setLightness: (value) => `hsl(340, 95%, ${value}%)`
      },
      light: {
        base: "hsl(0, 0%, 100%)",
        darker: "hsl(0, 0%, 90%)",
        setLightness: (value) => `hsl(0, 0%, ${value}%)`
      },
      dark: {
        base: "hsl(220, 13%, 18%)",
        darker: "hsl(222, 14%, 15%)",
        setLightness: (value) => `hsl(220, 13%, ${value}%)`
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
