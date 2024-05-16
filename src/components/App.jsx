import { Suspense, lazy } from "react";
// import CarForm from "./components/CarForm/CarForm";

import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./Loader";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const OneCarPage = lazy(() => import("../pages/OneCarPage"));

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
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <Outlet />
          </ul>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/catalog/:carId" element={<OneCarPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
