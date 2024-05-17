const CarForm = () => {
  return (
    <>
      <form>
        <label htmlFor="carBrand">Car brand</label>
        <select id="carBrand">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <label htmlFor="carPrice">Price/ 1 hour</label>
        <select id="carPrice">
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select>
        <label htmlFor="carMileageFrom">Сar mileage / km</label>
        <input type="text" id="carMileageFrom" placeholder="From" />
        <label htmlFor="carMileageTo"></label>
        <input type="text" id="carMileageTo" placeholder="To" />
        <button type="submit"></button>
      </form>
    </>
  );
};

export default CarForm;
