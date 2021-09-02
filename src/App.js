import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
