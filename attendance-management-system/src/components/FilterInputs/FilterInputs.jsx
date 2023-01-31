const FilterInputs = ({ filter, setFilter }) => {
  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <select
        name="unit"
        onChange={changeHandler}
        className="select select-bordered select-xs w-28 m-2 max-w-xs"
      >
        <option disabled selected>
          رشته
        </option>
        <option>کامپیوتر</option>
        <option>مکانیک</option>
        <option>الکترونیک</option>
        <option>ساختمان</option>
      </select>
      <select
        name="base"
        onChange={changeHandler}
        className="select button select-xs w-20 m-2 max-w-xs"
      >
        <option disabled selected>
          پایه
        </option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
    </div>
  );
};

export default FilterInputs;
