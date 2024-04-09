// import CarForm from "./components/CarForm/CarForm";
import CarList from "./CarList/CarList";
import cars from "../cars.json";
import { useState } from "react";

const App = () => {
  const [carsMagazine, setCarsMagazine] = useState(cars);

  const toogleFavorite = (id) => {
    setCarsMagazine(
      carsMagazine.map((car) => {
        if (car.id === id) {
          console.log(carsMagazine);
          return {
            ...carsMagazine,
          };
        }
        return carsMagazine;
      })
    );
  };

  return (
    <>
      <CarList items={cars} toogleFavorite={toogleFavorite} />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<ClassifiedsPage />} />
      </Routes> */}
    </>
  );
};
export default App;
