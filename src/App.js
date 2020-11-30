import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/Counter";
import Home from "./Components/Home";
import ProtectedRoute from "Shared/ProtectedRoute";
import ConnectedStore from "Shared/ConnectedStore";
import { Provider, initialState, UserReducer } from "Shared/UserContext";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(initialState);
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
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    </Router>
  );
}

export default ConnectedStore(App, UserReducer, initialState, Provider);
