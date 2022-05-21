import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { DisplayPokemon } from "../views/displayPokemon/DisplayPokemon";
import { AboutView } from "../views/about-us/AboutView";
import RoutingPath from "./RoutingPath"


export const Routes = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path ={RoutingPath.pokemonView} element={<DisplayPokemon/>} />
        <Route path ={RoutingPath.aboutView} element={<AboutView />} />
      </Switch>
    </BrowserRouter>
  );
};
