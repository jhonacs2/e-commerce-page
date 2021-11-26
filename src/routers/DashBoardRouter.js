import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Women } from "../components/Clothes/Women";
import { NavBar } from "../components/NavBar/NavBar";

import { Odin } from "../components/Odin/Odin";

import GlobalStyle from "../globalStyles";
import { WomenScreen } from "../page/WomenScreen";

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
          <Route exact path="/women" component={WomenScreen} />
          <Route exact path="/contact" />

          {/* por defecto si no hay nada redireccionara a la ruta marvel */}
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
