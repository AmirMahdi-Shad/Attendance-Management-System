import React from "react";

const DailyResTable = ({ items, isGreen, type }) => {
  return (
    <div
      className={`overflow-x-auto m-5 p-5 border-2 rounded-xl ${
        isGreen ? "border-green-600" : "border-red-600"
      }`}
    >
      <h1 className={` w-20 p-3 rounded-lg ${
                isGreen ? "bg-green-600" : "bg-red-600"
              }`}>{type}</h1>
<div>
          {items.map((item) => {
            return (
              <div className={`flex justify- w-80 bg-primary my-4 h-11 items-center rounded-lg  borde-r-4  ${
                isGreen ? "border-green-600" : "border-red-600"
              }`}>
                <div className={`border-2 w-1/3 h-full flex items-center justify-center p-4 rounded-r-lg ${
                isGreen ? "border-green-600 bg-green-600" : "border-red-600 bg-red-600"
              }`}>{item.id}</div>
                <div className={`border-2 w-96 text-sm h-full flex items-center justify-center p-4  ${
                isGreen ? "border-green-600" : "border-red-600"
              }`}>{item.name}</div>
                <div className={`border-2 w-1/3 h-full flex items-center justify-center p-4  ${
                isGreen ? "border-green-600" : "border-red-600"
              }`}>{item.unit}</div>
                <div className={`border-2 w-1/3 h-full flex items-center justify-center p-4 rounded-l-lg  ${
                isGreen ? "border-green-600" : "border-red-600"
              }`}>{item.base}</div>
              </div>
            );
          })}
        </div>
    </div>
    );
};

export default DailyResTable;
