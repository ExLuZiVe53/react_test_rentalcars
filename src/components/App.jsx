// import CarForm from "./components/CarForm/CarForm";
import CarList from "./CarList/CarList";
// import cars from "../cars.json";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritePage from "../pages/FavoritePage";
import NotFound from "../pages/NotFound";

const App = () => {
  // const toogleFavorite = (id) => {
  //   setCarsMagazine(
  //     carsMagazine.map((car) => {
  //       if (car.id === id) {
  //         return {
  //           ...carsMagazine,
  //         };
  //       }
  //       return carsMagazine;
  //     })
  //   );
  // };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
