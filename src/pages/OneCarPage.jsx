import { useEffect } from "react";
import { useParams } from "react-router-dom";

const OneCarPage = () => {
  const { carId } = useParams();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>OneCarPage{carId}</h1>
    </div>
  );
};

export default OneCarPage;
