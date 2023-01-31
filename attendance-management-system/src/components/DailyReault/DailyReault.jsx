import axios from "axios";
import { useEffect, useState } from "react";
import FilterInputs from "../FilterInputs/FilterInputs";
import DailyResTable from "../common/DailyResTable";

const DailyReault = ({ attenData }) => {
  const [attenDataCopy, setAttenDataCopy] = useState(attenData);
  const [presentsCount, setPresentsCount] = useState();
  const [absentCount, setAbsentCount] = useState();
  const [presentsId, setPresentsId] = useState([]);
  const [absentsId, setAbsentsId] = useState([]);
  const [absents, setAbsents] = useState([]);
  const [presents, setPresents] = useState([]);
  const [stds, setStds] = useState([]);

  // const countHandler = () => {
  //   let PCount = 0;
  //   attenDataCopy.map((a) => {
  //     PCount += a.peresentsid.length;
  //   });
  //   setPresentsCount(PCount);
  //   let ACount = 0;
  //   attenDataCopy.map((a) => {
  //     ACount += a.absentsid.length;
  //   });
  //   setAbsentCount(ACount);
  // };
  const studentsIdHandler = () => {
    let present = [];
    attenDataCopy.map((a) => {
      a.peresentsid.map((p) => {
        present.push(p);
        setPresentsId(present);
      });
    });
    let absent = [];
    attenDataCopy.map((a) => {
      a.absentsid.map((a) => {
        absent.push(a);
        setAbsentsId(absent);
      });
    });
    // ========================================
    // absents
  };
  const duplicateHandler = () => {
    const uniqueIds = [];

    const presentsIdC = presentsId.filter((element) => {
      const isDuplicate = uniqueIds.includes(element);

      if (!isDuplicate) {
        uniqueIds.push(element);

        return true;
      }

      return false;
    });

    setPresentsId(presentsIdC);
    // *******************************
    const uniqueIds2 = [];

    const absentsIdC = absentsId.filter((element) => {
      const isDuplicate = uniqueIds2.includes(element);

      if (!isDuplicate) {
        uniqueIds2.push(element);

        return true;
      }

      return false;
    });

    setAbsentsId(absentsIdC);
  };
  const showStudents = () => {
    // ========================================
    duplicateHandler();
    //
    setPresentsCount(presentsId.length);
    setAbsentCount(absentsId.length);
    //
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
    // absents
    let absentData = [];
    absentsId.map((absent) => {
      stds.map((std) => {
        if (std.id === absent) {
          absentData.push(std);
          setAbsents(absentData);
        }
      });
    });
    // presents
    let presentData = [];
    presentsId.map((present) => {
      stds.map((std) => {
        if (std.id === present) {
          presentData.push(std);
          setPresents(presentData);
        }
      });
    });
  };
  useEffect(() => {
    // countHandler();
    studentsIdHandler();
  }, []);

  return (
    <>
      <div
        className="stats shadow xl:left-3 absolute top-24 w-screen xl:w-fit flex-col"
        onClick={showStudents}
      >
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">غایبان </div>
          <div className="stat-value text-red-500">{absentCount}</div>
          <div className="stat-desc">کلیک کنید تا نمایش داده شود </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">حاضران </div>
          <div className="stat-value text-green-500">{presentsCount}</div>
          <div className="stat-desc">کلیک کنید تا نمایش داده شود </div>
        </div>
      </div>
      <div className="flex">
        <DailyResTable items={presents} isGreen={true} type="حاضران" />
        <DailyResTable items={absents} isGreen={false} type="غایبان" />
      </div>
    </>
  );
};

export default DailyReault;
