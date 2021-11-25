import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { NavBar } from "../components/NavBar/NavBar";

import { Odin } from "../components/Odin/Odin";

import GlobalStyle from "../globalStyles";

export const DashBoardRouter = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <div>
        <Switch>
          {/* redirecciona al la ruta y renderiza el componente */}
          <Route exact path="/home" component={Odin} />
          <Route exact path="/men" />
          <Route exact path="/women" />
          <Route exact path="/contact" />

          {/* por defecto si no hay nada redireccionara a la ruta marvel */}
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
