import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import { fetchCars } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import CarModal from "../components/CarModal/CarModal";

const CatalogPage = () => {
  const [searchCars, setSearchCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ isOpen: false, modalData: null });

  const onOpenModal = (modalData) => {
    setModal({ isOpen: true, modalData: modalData });
  };

  const onCloseModal = () => {
    setModal({ isOpen: false, modalData: null });
  };

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
        onOpenModal={onOpenModal}
      />
      {modal.isOpen && (
        <CarModal onCloseModal={onCloseModal} modalData={modal.modalData} />
      )}
    </div>
  );
};

export default CatalogPage;
