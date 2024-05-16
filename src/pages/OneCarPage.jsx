import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCars } from "../services/api";

const OneCarPage = () => {
  const { carId } = useParams();
  console.log(carId);

  useEffect(() => {
    const fetchOneCar = async (data) => {
      const oneCarData = await fetchCars(data);
      console.log(oneCarData);
    };

    fetchOneCar();
  }, []);

  return (
    <div>
      <h1>OneCarPage{carId}</h1>
    </div>
  );
};

export default OneCarPage;
