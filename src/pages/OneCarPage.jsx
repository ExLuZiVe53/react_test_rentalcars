// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CarModal from "../components/CarModal/CarModal";
// import { fetchCars } from "../services/api";

const OneCarPage = () => {
  const { id } = useParams();
  console.log(id);

  // useEffect(() => {
  //   const fetchOneCar = async (data) => {
  //     const oneCarData = await fetchCars(data);
  //     console.log(oneCarData);
  //   };

  //   fetchOneCar();
  // }, []);

  return (
    <div>
      <h1>OneCarPage{id}</h1>
      <CarModal />
    </div>
  );
};

export default OneCarPage;
