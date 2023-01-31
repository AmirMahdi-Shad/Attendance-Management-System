import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { MdDoNotDisturb } from "react-icons/md";
import user from "../../img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import { render } from "@testing-library/react";
const TableRows = ({
  row,
  setPresentValue,
  presentValue,
  setAbsentValue,
  absentValue,
}) => {
  const { name, unit, field, base, id } = row;

  const [isChecked, setIsChecked] = useState(false);
  const [bgColor, setBgColor] = useState();

  const presentClickHandler = () => {
    if (!isChecked) {
      setPresentValue([...presentValue, id]);
      setIsChecked(true);
      setBgColor("present");
    } else {
      setPresentValue(presentValue.filter((atten) => atten.name !== name));
      setIsChecked(false);
      setBgColor("");
    }
  };
  const absentClickHandler = () => {
    if (!isChecked) {
      setAbsentValue([...absentValue, id]);
      setIsChecked(true);
      setBgColor("absent");
    } else {
      setAbsentValue(absentValue.filter((atten) => atten.name !== name));
      setIsChecked(false);
      setBgColor("");
    }
  };

  return (
    <tr>
      <div
        className={`card w-80 xl:w-96 bg-base-100 shadow-xl image-full m-5 xl:my-6 xl:m-6 relative`}
      >
        <div className={`card-${bgColor} absolute z-10`}></div>
        <figure>
          <img src={user} alt="Shoes" />
        </figure>
        {/* {renderIcon()} */}
        <div className="card-body">
          <td className="w-40">
            <div className="flex items-center space-x-3 justify-self-stretch">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <FaUserGraduate className="w-full h-full" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{unit}</div>
              </div>
            </div>
          </td>
          <td className="text-center">
            {field}
            <br />
            <span className="badge badge-ghost badge-sm">
              Desktop Support Technician
            </span>
          </td>
          <td className="text-center">{base}</td>
          <th className="flex justify-between">
            <div className="card-actions justify-end">
              <button
                className="btn btn-error z-50"
                onClick={absentClickHandler}
              >
                غایب
              </button>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-success z-50"
                onClick={presentClickHandler}
              >
                حاضر
              </button>
            </div>
          </th>
        </div>
      </div>
      {/*  */}
      {/* <div className="card image-ful w-80 xl:w-96 bg-base-100 shadow-xl m-6">
        <figure>
          <img src={user} alt="car!" className="rounded-2xl h-80 w-full " />
        </figure>
        <div className="card-body">
          <th>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                onChange={ChangeHandler}
              />
            </label>
          </th>
          <td className="w-40">
            <div className="flex items-center space-x-3 justify-self-stretch">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <FaUserGraduate className="w-full h-full" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{unit}</div>
              </div>
            </div>
          </td>
          <td className="text-center">
            {field}
            <br />
            <span className="badge badge-ghost badge-sm">
              Desktop Support Technician
            </span>
          </td>
          <td className="text-center">{base}</td>
          <th>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">details</button>
            </div>
          </th>
        </div>
      </div> */}
    </tr>
  );
};

export default TableRows;
