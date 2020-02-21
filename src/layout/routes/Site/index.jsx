/* --- Global --- */
import React from "react";
import { Router } from "@reach/router";

/* --- Local --- */
import { Site } from "@templates";
import { Home } from "@pages";

/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router
      primary={false}
      style={{ display: "flex", flex: 1, height: "100%", width: "100%" }}
    >
      <Home path="/" />
    </Router>
  </Site>
);

export default IndexPage;
