import axios from "axios";

export const fetchCars = async () => {
  const { data } = await axios.get(
    "https://65cd17cedd519126b8401aef.mockapi.io/cars/"
  );

  return data;
};

export const fetchCar = async (carId) => {
  const { data } = await axios.get(
    "https://65cd17cedd519126b8401aef.mockapi.io/cars/:carId"
  );
  fetchCar(carId);
  console.log(data);
  return data;
};

//  useEffect(() => {
//    // 1. We declare an asynchronous function
//    async function fetchSearchAllCars() {
//      // HTTP Request
//      const response = await axios.get(
//        "https://65cd17cedd519126b8401aef.mockapi.io/cars"
//      );
//      setSearchCars(response.data);
//    }
//    // 2. You must call function
//    fetchSearchAllCars();
//  }, []);
