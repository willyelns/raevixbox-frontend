import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Box from "./pages/Box";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* Só abre a rota se for EXATAMENTE a digitada */}
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
