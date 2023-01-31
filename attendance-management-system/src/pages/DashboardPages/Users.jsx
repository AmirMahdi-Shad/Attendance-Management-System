import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const [userData, setUserData] = useState({
    name: "",
    unit: "انتخاب رشته",
    field: "انتخاب نام کامل رشته",
    base: "انتخاب پایه",
  });
  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const addUserHandler = () => {
    if (userData.name !== "") {
      axios
        .post(
          "https://api.dotenx.com/database/query/insert/project/2jQf88S2dwKpuOpj/table/students",
          userData,
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          toast.success("با موفقیت افزوده شد", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setUserData({
            name: "",
            unit: "انتخاب رشته",
            field: "انتخاب نام کامل رشته",
            base: "انتخاب پایه",
          });
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
    } else {
      toast.error("لطفا مقدار نام را وارد نمایید", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className="flex justify-center items-center bg-login h-dashboard-screen">
      <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100 -mt-[59px]">
        <div className="card-body flex-row  flex-wrap items-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text">نام و نام خانوادگی</span>
            </label>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="input input-bordered"
              name="name"
              value={userData.name}
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">نام رشته</span>
            </label>
            <select
              className="select select-accent w-full max-w-xs"
              onChange={changeHandler}
              name="unit"
              value={userData.unit}
            >
              <option disabled selected>
                انتخاب رشته
              </option>
              <option>کامپیوتر</option>
              <option>مکانیک</option>
              <option>الکترونیک</option>
              <option>ساختمان</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">پایه </span>
            </label>
            <select
              className="select select-accent w-full max-w-xs"
              onChange={changeHandler}
              name="base"
              value={userData.base}
            >
              <option disabled selected>
                انتخاب پایه
              </option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">نام کامل رشته </span>
            </label>
            <select
              className="select select-accent w-full max-w-xs"
              onChange={changeHandler}
              name="field"
              value={userData.field}
            >
              <option disabled selected>
                انتخاب نام کامل رشته
              </option>
              <option>شبکه و نرم افزار رایانه</option>
              <option>برق و الکترونیک</option>
              <option>عمران</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={addUserHandler}>
              ثبت دانش آموز
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
