// import CarForm from "./components/CarForm/CarForm";
import CarList from "./CarList/CarList";
import cars from "../cars.json";
// import { useState } from "react";

const App = () => {
  // const [carClass, setCarClass] = useState(false);

  return (
    <>
      <CarList items={cars} />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<ClassifiedsPage />} />
      </Routes> */}
    </>
  );
};
export default App;
