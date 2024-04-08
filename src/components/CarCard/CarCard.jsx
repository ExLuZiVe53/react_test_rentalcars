const CarCard = (items) => {
  return (
    <div>
      <img width={401} src={items.img} alt={items.make} />
      <h3>
        {items.make}
        <span>{items.model}</span>
      </h3>
      <span>{items.rentalPrice}</span>

      <p>{items.address}</p>
      <p>{items.rentalCompany}</p>
      <p>{items.type}</p>
      <p>{items.model}</p>
      <p>{items.id}</p>
      <p>{items.functionalities}</p>
      <button></button>
    </div>
  );
};

export default CarCard;
