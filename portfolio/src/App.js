import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch"
import Portfolio from "./pages/portfolio"
import Profile from "./pages/profile"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Profile />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/*" component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
