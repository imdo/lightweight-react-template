import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/Counter";
import Home from "./Components/Home";
import ProtectedRoute from "Shared/ProtectedRoute";
import ConnectedStore from "Shared/ConnectedStore";
import { Provider, initialState, UserReducer } from "Shared/UserContext";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <ProtectedRoute component={About} exact path="/counter" />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default ConnectedStore(App, UserReducer, initialState, Provider);
