import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import { fetchCars } from "../services/api";

const CatalogPage = () => {
  const [searchCars, setSearchCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        setIsLoading(true);
        const carsData = await fetchCars();
        setSearchCars(carsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllCars();
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
