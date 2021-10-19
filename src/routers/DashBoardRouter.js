import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CollectionsScreen } from '../components/pages/collections/CollectionsScreen';
import { MenScreen } from '../components/pages/men/MenScreen';
import { WomenScreen } from '../components/pages/women/WomenScreen';
import { Header } from '../components/ui/Header';

export const DashBoardRouter = () => {
  return (
    <>
      <Header />
      <div>
        <Switch>
          {/* redirecciona al la ruta y renderiza el componente */}
          <Route exact path='/collections' component={CollectionsScreen} />
          <Route exact path='/men' component={MenScreen} />
          <Route exact path='/women' component={WomenScreen} />

          {/* por defecto si no hay nada redireccionara a la ruta marvel */}
          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};
