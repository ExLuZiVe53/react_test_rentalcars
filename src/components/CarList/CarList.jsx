import CarCard from "../CarCard/CarCard.jsx";

const CarList = ({ items }) => {
  console.log(items);
  const showCars = Array.isArray(items) && items.length;
  return (
    <ul className="carsList">
      {showCars &&
        items.map((item) => {
          return (
            <li key={`${item.id}_${item.type}`}>
              {item.model}
              <CarCard
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
              />
            </li>
          );
        })}
    </ul>
  );
};
export default CarList;
