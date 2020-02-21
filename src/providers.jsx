/* --- Global --- */
import { ThemeProvider } from "theme-ui";

/* --- Local --- */
import theme from "./assets/theme";

/* --- Module --- */

/* --- Component --- */
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
