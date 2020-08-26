import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import headerBackground from "../assets/images/Banner.jpg";
import Layout from "./Layout";
import Header from "./header/Header";
import Filter from "../components/filter/Filter";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Header {...props} bgImage={headerBackground} text={"Hola desde App.jsx"}>
                <Filter />
              </Header>
            )}
          />
        </Switch>
        <Layout></Layout>
      </BrowserRouter>
    );
  }
}

export default App;
