import axios from "axios";
import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";

const CatalogPage = () => {
  const [searchCars, setSearchCars] = useState([]);

  useEffect(() => {
    // 1. We declare an asynchronous function
    async function fetchSearchAllCars() {
      // HTTP Request
      const response = await axios.get(
        "https://65cd17cedd519126b8401aef.mockapi.io/cars"
      );
      setSearchCars(response.data);
      console.log(response);
    }
    // 2. You must call function
    fetchSearchAllCars();
  }, []);

  return (
    <div>
      <h1>CatalogPage</h1>
      <CarList
        items={searchCars}
        // toogleFavorite={toogleFavorite}
      />
    </div>
  );
};

export default CatalogPage;
