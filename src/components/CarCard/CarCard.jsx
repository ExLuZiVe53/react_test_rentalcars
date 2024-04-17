import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa6";

const CarCard = ({
  id,
  year,
  make,
  model,
  type,
  img,
  // description,
  // fuelConsumption,
  // engineSize,
  // accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,

  // rentalConditions,
  // mileage,
  toogleFavorite,
}) => {
  const tableInfoCars = address.split(",");

  const city = tableInfoCars[1];
  const country = tableInfoCars[2];
  // const oneFuncion = functionalities.split(",");
  // console.log(oneFuncion);

  return (
    <div className="cardContainer">
      <img width={401} src={img} alt={make} />
      <button type="button" onClick={() => toogleFavorite(id)}>
        <FaRegHeart />
      </button>
      <div className="cardInfo">
        <h3 className="titleMake">
          {make}
          <span className="subtextModel">{model}</span>
        </h3>
        <p className="textYear">{year}</p>
        <span className="subtextRentalPrice">{rentalPrice}</span>
      </div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td className="textCity">{city}</td>
            <td className="textCountry">{country}</td>
            <td className="textRentalCompany">{rentalCompany}</td>
            <td>Premium</td>
          </tr>
          <tr>
            <td className="textType">{type}</td>
            <td className="textModel">{make}</td>
            <td className="textId">{id}</td>
            <td className="textFunctionalities">{functionalities[0]}</td>
          </tr>
        </tbody>
      </table>
      {/* <p className="textCity">{city}</p> */}
      {/* <p className="textCountry">{country}</p> */}
      {/* <p className="textRentalCompany">{rentalCompany}</p> */}
      {/* <p className="textType">{type}</p> */}
      {/* <p className="textModel">{model}</p> */}
      {/* <p className="textId">{id}</p> */}
      {/* <p className="textFunctionalities">{functionalities[0]}</p> */}
      <button className="btnMore">Learn more</button>
    </div>
  );
};

export default CarCard;

CarCard.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    functionalities: PropTypes.oneOf([]),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    toogleFavorite: PropTypes.func,
  }),
};
