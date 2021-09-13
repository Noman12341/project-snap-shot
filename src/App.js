import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/Home/Home";
import FavoritePage from "./pages/Favorite/Favorite";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/favorites" component={FavoritePage} />
      </Switch>
    </Router>
  );
}

export default App;
