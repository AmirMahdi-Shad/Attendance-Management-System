import axios from "axios";
import { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const SelectClass = ({ setAttenData }) => {
  const [filter, setFilter] = useState({ conjunction: "or" });
  const [date, setDate] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const filterHandler = () => {
    setLoading(true);
    attendanceHandler();
  };
  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    if (e.target.name === "conjunction") {
      if (e.target.checked) {
        setFilter({ ...filter, conjunction: "and" });
      } else {
        setFilter({ ...filter, conjunction: "or" });
      }
    }
  };

  useEffect(() => {
    if (selectedDay) {
      dateHandler();
    }
  }, [selectedDay]);
  const dateHandler = (e) => {
    let month = "0" + selectedDay.month;
    let day = "0" + selectedDay.day;
    let date = month.slice(-2) + day.slice(-2);
    console.log(date);
    setDate(date);
  };
  const attendanceHandler = async () => {
    const data = await axios.post(
      "https://api.dotenx.com/database/query/select/project/2jQf88S2dwKpuOpj/table/coumputerattendance",
      {
        columns: ["date", "peresentsid", "absentsid", "course", "unit", "base"],
        filters: {
          filterSet: [
            {
              key: "date",
              operator: "=",
              value: filter.date,
            },
            {
              key: "course",
              operator: "=",
              value: filter.course,
            },
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
          conjunction: filter.conjunction,
        },
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          size: "300",
        },
      }
    );
    setAttenData(data.data.rows);
    if (data.data.rows) {
      navigate("/dailyAttendance/result");
    }
    if (data.data.rows === null) {
      toast.warn("اطلاعات موجود نمی باشد", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  if (loading)
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
    <div className='card glass h-fit w-96'>
      <div className='card-body items-center text-center'>
        {/* <ThemeProvider theme={theme}>
          <LocalizationProvider
            dateAdapter={AdapterJalali}
            adapterLocale={locale}
          >
            <DatePicker
              mask="____/__/__"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                console.log(value);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </ThemeProvider> */}
        <div>
          <h3 className='card-title font-bold text-lg'>
            کلاس خود را انتخاب کنید
          </h3>
          <div className='flex flex-col '>
            <select
              name='unit'
              onChange={changeHandler}
              className='select select-bordered  w-full m-2 max-w-xs'
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
              className='select select-bordered  w-full m-2 max-w-xs'
            >
              <option disabled selected>
                پایه
              </option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select
              name='course'
              onChange={changeHandler}
              className='select select-bordered  w-full m-2 max-w-xs'
            >
              <option disabled selected>
                درس
              </option>
              <option>ریاضی</option>
              <option>تاریخ</option>
              <option>شیمی</option>
              <option>کارآفرینی</option>
            </select>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <span className='label-text'>فیلتر پیشرفته</span>
                <input
                  type='checkbox'
                  name='conjunction'
                  onChange={changeHandler}
                  className='checkbox'
                />
              </label>
            </div>
            <input
              type='text'
              autocomplete='off'
              placeholder='تاریخ'
              name='date'
              onChange={changeHandler}
              class='input input-bordered w-full m-2 max-w-xs'
            />
          </div>
        </div>
        <div className='card-actions'>
          <label className='btn' onClick={filterHandler}>
            ثبت
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectClass;
