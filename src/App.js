import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";

// Loading Containers
import Home from "./containers/Home";
import ComingSoon from "./containers/ComingSoon";
import Page404 from "./containers/Page404";

// Loading Components
import Fallback from "./components/Fallback";
import NavigationBar from "./components/NavigationBar";
import { history } from "./helpers/history";

// Importing css for the whole app
import "./scss/app.scss";

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Router history={history}>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coming-soon" component={ComingSoon} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
