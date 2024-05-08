import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import { fetchCars } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

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
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <CarList
        items={searchCars}
        // toogleFavorite={toogleFavorite}
      />
    </div>
  );
};

export default CatalogPage;
