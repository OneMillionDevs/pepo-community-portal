/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Global --- */
import { Router } from "@reach/router";
/* --- Local --- */
import { Site, Dashboard } from "@routes";
import Providers from "./providers";

/* --- Component --- */
export default () => (
  <Providers>
    <Router width="100%">
      <Site path="/*" />
      <Dashboard path="/dashboard/*" />
    </Router>
  </Providers>
);
