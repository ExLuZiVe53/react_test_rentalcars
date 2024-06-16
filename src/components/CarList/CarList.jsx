// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CarCard from "../CarCard/CarCard.jsx";
import CarForm from "../CarForm/CarForm.jsx";

const CarList = ({ items, toogleFavorite, onOpenModal }) => {
  const showCars = Array.isArray(items) && items.length;
  return (
    <ul className="cars__List">
      <CarForm />
      {showCars &&
        items.map((item) => {
          return (
            <li className="cars__Item" key={`${item.id}_${item.engineSize}`}>
              <CarCard
                id={item.id}
                year={item.year}
                make={item.make}
                model={item.model}
                type={item.type}
                img={item.img}
                description={item.description}
                fuelConsumption={item.fuelConsumption}
                engineSize={item.engineSize}
                accessories={item.accessories}
                functionalities={item.functionalities}
                rentalPrice={item.rentalPrice}
                rentalCompany={item.rentalCompany}
                address={item.address}
                rentalConditions={item.rentalConditions}
                mileage={item.mileage}
                toogleFavorite={toogleFavorite}
                onOpenModal={onOpenModal}
              />
            </li>
          );
        })}
    </ul>
  );
};
export default CarList;

// CarList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.number,
//       PropTypes.arrayOf(PropTypes.string),
//     ])
//   ),
// };
