import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DailyReault from "../../components/DailyReault/DailyReault";
import SelectClass from "../../components/SelectClass/SelectClass";

const DailyAttendance = () => {
  const [attenData, setAttenData] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get("https://api.keybit.ir/time/").then((res) => {
      setDate(
        res.data.date.weekday.name +
          " " +
          res.data.date.day.name +
          " " +
          res.data.date.month.name
      );
    });
  }, []);
  return (
    <>
      <div className="toast toast-start">
        <div className="alert alert-info">
          <div>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-dashboard-screen bg-login">
        <Routes>
          <Route
            path="selectClass"
            element={<SelectClass setAttenData={setAttenData} />}
          />
          <Route
            path="result"
            element={<DailyReault attenData={attenData} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default DailyAttendance;
