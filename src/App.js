import "./styles.css";
import { ThemeProvider } from "@emotion/react";
// import TodoList from "./pages/TodoList";
import TodoList from "./pages/TodoListClass";

export default function App() {
  const theme = {
    color: {
      primary: {
        base: "hsl(193, 95%, 68%)",
        darker: "hsl(193, 95%, 45%)",
        setLightness: (lightness, opacity) =>
          opacity === undefined
            ? `hsl(193, 95%, ${lightness}%)`
            : `hsl(193, 95%, ${lightness}%, ${opacity})`
      },
      secondary: {
        base: "hsl(340, 95%, 68%)",
        darker: "hsl(340, 95%, 60%)",
        setLightness: (lightness, opacity) =>
          opacity === undefined
            ? `hsl(340, 95%, ${lightness}%)`
            : `hsl(340, 95%, ${lightness}%, ${opacity})`
      },
      light: {
        base: "hsl(0, 0%, 100%)",
        darker: "hsl(0, 0%, 90%)",
        setLightness: (lightness, opacity) =>
          opacity === undefined
            ? `hsl(0, 0%, ${lightness}%)`
            : `hsl(0, 0%, ${lightness}%, ${opacity})`
      },
      dark: {
        base: "hsl(220, 13%, 18%)",
        darker: "hsl(222, 14%, 15%)",
        setLightness: (lightness, opacity) =>
          opacity === undefined
            ? `hsl(220, 13%, ${lightness}%)`
            : `hsl(220, 13%, ${lightness}%, ${opacity})`
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
