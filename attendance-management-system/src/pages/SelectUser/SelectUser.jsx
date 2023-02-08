import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";
import Student from "../../components/common/Student";

const SelectUser = () => {
  const [stds, setStds] = useState(null);
  const showStudentsHandler = () => {
    axios
      .post(
        "https://api.dotenx.com/database/query/select/project/2jQf88S2dwKpuOpj/table/students",
        {
          columns: ["name", "unit", "field", "base", "id"],
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            size: "300",
          },
        }
      )
      .then((res) => setStds(res.data.rows))
      .catch((err) => err);
  };

  useEffect(() => {
    showStudentsHandler();
  }, []);
  if (!stds)
    return (
      <div className='h-dashboard-screen flex flex-col items-center justify-center bg-chart'>
        <HashLoader
          color='#F9D72F'
          cssOverride={{}}
          loading
          size={80}
          speedMultiplier={1}
        />
      </div>
    );
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {stds &&
        stds.map((std) => {
          return (
            <Student
              key={std.id}
              id={std.id}
              name={std.name}
              base={std.base}
              unit={std.unit}
            />
          );
        })}
    </div>
  );
};

export default SelectUser;
