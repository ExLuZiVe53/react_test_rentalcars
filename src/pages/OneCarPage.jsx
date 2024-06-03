import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarModal from "../components/CarModal/CarModal";
import { fetchCar } from "../services/api";

const OneCarPage = () => {
  const [cars, setCars] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchOneCar = async () => {
      const oneCarData = await fetchCar();
      console.log(oneCarData);
      setCars(oneCarData);
    };

    fetchOneCar();
  }, []);

  return (
    <div>
      <h1>OneCarPage{id}</h1>
      <CarModal car={cars} />
    </div>
  );
};

export default OneCarPage;
