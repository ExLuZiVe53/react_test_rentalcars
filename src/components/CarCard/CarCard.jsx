const CarCard = (
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address
  // rentalConditions,
  // mileage
) => {
  return (
    <li>
      <img src={img} alt={make} />
      <h3>
        {make}
        <span>{model}</span>
      </h3>
      <span>{rentalPrice}</span>

      <p>{address}</p>
      <p>{rentalCompany}</p>
      <p>{type}</p>
      <p>{model}</p>
      <p>{id}</p>
      <p>{functionalities}</p>
      <button></button>
    </li>
  );
};

export default CarCard;
