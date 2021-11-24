import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Odin } from "../components/Odin/Odin";

import GlobalStyle from "../globalStyles";

export const DashBoardRouter = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Switch>
          {/* redirecciona al la ruta y renderiza el componente */}
          <Route exact path="/home" component={Odin} />
          <Route exact path="/men" />
          <Route exact path="/women" />

          {/* por defecto si no hay nada redireccionara a la ruta marvel */}
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
