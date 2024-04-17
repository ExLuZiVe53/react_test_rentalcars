// import CarForm from "./components/CarForm/CarForm";
import CarList from "./CarList/CarList";
// import cars from "../cars.json";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  // const [carsMagazine, setCarsMagazine] = useState(cars);
  const [searchCars, setSearchCars] = useState([]);

  useEffect(() => {
    // 1. We declare an asynchronous function
    async function fetchSearchAllCars() {
      // HTTP Request
      const response = await axios.get(
        "https://65cd17cedd519126b8401aef.mockapi.io/cars"
      );
      setSearchCars(response.data);
    }
    // 2. You must call function
    fetchSearchAllCars();
  }, []);

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
      <CarList
        items={searchCars}
        // toogleFavorite={toogleFavorite}
      />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<ClassifiedsPage />} />
      </Routes> */}
    </>
  );
};
export default App;
