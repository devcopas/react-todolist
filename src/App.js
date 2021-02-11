import "./styles.css";
import { ThemeProvider } from "@emotion/react";
import TodoList from "./pages/TodoList";

export default function App() {
  const theme = {
    color: {
      primary: {
        blue: "hsl(193, 95%, 68%)",
        red: "hsl(340, 95%, 68%)",
        white: "hsl(0, 0%, 100%)"
      },
      darker: {
        blue: "hsl(193, 95%, 45%)",
        red: "hsl(340, 95%, 60%)"
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
