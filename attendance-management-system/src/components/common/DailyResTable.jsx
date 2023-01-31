import React from "react";

const DailyResTable = ({ items, isGreen, type }) => {
  return (
    <div
      className={`overflow-x-auto m-5 p-5 border-2 rounded-xl ${
        isGreen ? "border-green-600" : "border-red-600"
      }`}
    >
      <h1>{type}</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>اسم </th>
            <th>رشته </th>
            <th>پایه</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr className="hover">
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.unit}</td>
                <td>{item.base}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DailyResTable;
