import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCars } from "../services/api";
import MarkupModal from "../components/MarkupModal";

const OneCarPage = (items) => {
  console.log(items);
  const [cars, setCars] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchOneCar = async () => {
      const oneCarData = await fetchCars();
      console.log(oneCarData);
      // const getCarId = (id) => {
      //   return oneCarData.find((cars) => cars.id === id);
      // };
      setCars(cars);
    };

    fetchOneCar();
  }, [cars]);

  return (
    <div>
      <h1>OneCarPage{id}</h1>
      <MarkupModal items={items} />
    </div>
  );
};

export default OneCarPage;
