import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { Header } from "../components/ui/Header";

export const DashBoardRouter = () => {
  return (
    <>
      <Header />
      <div>
        <Switch>
          {/* redirecciona al la ruta y renderiza el componente */}
          <Route exact path="/home" />
          <Route exact path="/men" />
          <Route exact path="/women" />

          {/* por defecto si no hay nada redireccionara a la ruta marvel */}
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
