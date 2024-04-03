// import CarForm from "./components/CarForm/CarForm";
import CarList from "./components/CarList/CarList";
import cars from "./cars.json";

const App = () => {
  return (
    <>
      {/* <CarCard /> */}
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
