const CarModal = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src="" alt="" />
        <h3 className="titleMake"></h3>
        <span className="subtextModel"></span>
        <p className="textYear"></p>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td className="textCity">City</td>
              <td className="textCountry">Country</td>
              <td className="textId">Id:</td>
              <td className="textYear">Year:</td>
              <td className="textType">Type:</td>
            </tr>
            <tr>
              <td className="textFuelConsumption">FuelConsumption:</td>
              <td className="textEngineSize">EngineSize:</td>
            </tr>
          </tbody>
        </table>
        <h3>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </h3>
        <table>
          <thead>Accessories and functionalities:</thead>
          <tbody>
            <tr>
              <td className="textAccessories0">Accessories0</td>
              <td className="textAccessories1">Accessories1</td>
              <td className="textFunctionalities0">Functionalities0</td>
            </tr>
            <tr>
              <td className="textAccessories2">Accessories2</td>
              <td className="textFunctionalities1">Functionalities1</td>
              <td className="textFunctionalities2">Functionalities2</td>
            </tr>
          </tbody>
        </table>
        <h3>Rental Conditions:</h3>
        <button>Minimum age : 25</button>
        <button>Valid drivers license</button>
        <button>Security deposite required</button>
        <button>Mileage: 5,858</button>
        <button>Price: 40$</button>
        <button type="submit">Rental car</button>
      </div>
    </div>
  );
};

export default CarModal;
