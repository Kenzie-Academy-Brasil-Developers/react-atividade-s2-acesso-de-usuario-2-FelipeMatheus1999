import "./App.css";
import Home from "./components/Home";
import { members } from "./array";
import Customer from "./components/pages/customer";
import Company from "./components/pages/company";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" >
            <Home members={members} />
          </Route>

          <Route path="/customer/:id">
            <Customer  members={members} />
          </Route>

          <Route path="/company/:id">
            <Company  members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
