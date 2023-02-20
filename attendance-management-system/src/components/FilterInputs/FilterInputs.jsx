const FilterInputs = ({ filter, setFilter }) => {
  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <select
        name='unit'
        onChange={changeHandler}
        className='select select-bordered select-xs w-30 m-2 h-12 text-base max-w-xs bg-yellow-200 border-2 border-neutral text-neutral'
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
        name='base'
        onChange={changeHandler}
        className='select button select-xs w-24 m-2 h-12 text-base max-w-xs bg-yellow-200 border-2 border-neutral text-neutral'
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
