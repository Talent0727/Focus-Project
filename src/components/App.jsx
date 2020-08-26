import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import headerBackground from "../assets/images/Banner.jpg";
import Layout from "./Layout";
import Header from "./header/Header";
import Filter from "../components/filter/Filter";
import "../assets/styles/components/util/Variables.scss";

const Test = () => (
  <div>
    <h1 className="color1">Hola Body 1</h1>
    <h1 className="color2">Hola Body 2</h1>
    <h1 className="color3">Hola Body 3</h1>
    <h1 className="color4">Hola Body 4</h1>
  </div>
);
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Header {...props} bgImage={headerBackground}>
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
