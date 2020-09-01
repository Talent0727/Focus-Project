import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import JobPage from "./jobPage/JobPage";
import jobCard from "./jobCard/JobCard";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/job" component={JobPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
