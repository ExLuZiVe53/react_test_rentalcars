import { Suspense, lazy } from "react";
// import CarForm from "./components/CarForm/CarForm";

import { Link, Route, Routes } from "react-router-dom";
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
