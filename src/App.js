import { Switch } from "react-router-dom";
import { useState } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Details } from "./Pages/Details";

function App() {
  const [countries, setCountries] = useState([]);
  
  return (
    <>
      <Header/>
      <Main>
        <Switch>
          <Route exact path="/" >
            <Home countries={countries} setCountries={setCountries} />
          </Route>
          <Route exact path="/country/:name" component={Details} />
          <Route component={NotFound}/>
        </Switch>
      </Main>
    </>
  );
}

export default App;
