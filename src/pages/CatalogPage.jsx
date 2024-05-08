import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import { fetchCars } from "../services/api";
import { Hourglass } from "react-loader-spinner";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

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
      {isLoading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )}
      {error && <ErrorMessage message={error} />}
      <CarList
        items={searchCars}
        // toogleFavorite={toogleFavorite}
      />
    </div>
  );
};

export default CatalogPage;
