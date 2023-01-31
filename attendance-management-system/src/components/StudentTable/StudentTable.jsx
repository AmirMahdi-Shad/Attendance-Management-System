import axios from "axios";
import { useEffect, useState } from "react";
import { BsJournalPlus } from "react-icons/bs";
import TableRows from "../TableRows/TableRows";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentTable = ({
  filter,
  search,
  setPresentValue,
  setAbsentValue,
  presentValue,
  absentValue,
}) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState();
  const [date, setDate] = useState();
  const [course, setCourse] = useState();
  useEffect(() => {
    axios.get("https://api.keybit.ir/time/").then((res) => {
      setDate(res.data.date.month.number.en + res.data.date.day.number.en);
    });
  }, []);
  const attendaceHandler = () => {
    axios
      .post(
        "https://api.dotenx.com/database/query/insert/project/2jQf88S2dwKpuOpj/table/coumputerattendance",
        {
          date,
          course,
          unit: filter.unit,
          base: filter.base,
          peresentsid: presentValue,
          absentsid: absentValue,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        toast.success("با موفقیت ثبت گردید", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(0);
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );
  };
  const courseHandler = (e) => {
    setCourse(e.target.value);
  };
  useEffect(() => {
    axios
      .post(
        "https://api.dotenx.com/database/query/select/project/2jQf88S2dwKpuOpj/table/students",
        {
          columns: ["name", "unit", "field", "base", "id"],
          filters: {
            filterSet: [
              {
                key: "unit",
                operator: "=",
                value: filter.unit,
              },
              {
                key: "base",
                operator: "=",
                value: filter.base,
              },
            ],
            conjunction: "and",
          },
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            size: "300",
          },
        }
      )
      .then((res) => setRows(res.data.rows))
      .catch((err) => err);
  }, [filter]);
  return (
    <div className="overflow-x-auto w-full">
      <div className="table w-full">
        {/* <!-- head --> */}
        <div className="flex flex-wrap justify-center items-center">
          {/* <!-- row s --> */}
          {rows &&
            rows.map((row) => (
              <TableRows
                key={row.id}
                row={row}
                setPresentValue={setPresentValue}
                setAbsentValue={setAbsentValue}
                presentValue={presentValue}
                absentValue={absentValue}
              />
            ))}
        </div>
        {/* <!-- foot --> */}
      </div>
      {/* The button to open modal */}
      <label
        htmlFor="submit-modal"
        className="btn btn-wide fixed bottom-3 left-1 z-50"
      >
        ثبت حضور غیاب
        <BsJournalPlus className="text-2xl mr-4" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="submit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <div className="modal-action">
            <select
              onChange={courseHandler}
              className="select select-bordered select-xs w-28 m-2 max-w-xs"
            >
              <option disabled selected>
                نام درس
              </option>
              <option>ریاضی</option>
              <option>تاریخ</option>
              <option>شیمی</option>
              <option>کارآفرینی</option>
            </select>
            <label
              htmlFor="submit-modal"
              className="btn btn-success"
              onClick={attendaceHandler}
            >
              ثبت
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
