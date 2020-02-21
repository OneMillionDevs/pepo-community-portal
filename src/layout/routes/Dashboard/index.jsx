import { Dashboard } from "@templates";
import { Router } from "@reach/router";

import { Overview } from "@pages";

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" style={{ height: "100%" }} primary={false}>
      <Overview path="/" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
