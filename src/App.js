import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import IntroducePage from "./pages/Introduce";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/introduce" component={IntroducePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
