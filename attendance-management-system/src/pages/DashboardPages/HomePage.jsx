import axios from "axios";
import { useEffect, useState } from "react";
import { HiFilter } from "react-icons/hi";
import { BsJournalPlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import FilterInputs from "../../components/FilterInputs/FilterInputs";
import StudentTable from "../../components/StudentTable/StudentTable";
import logo from "../../img/login-logo.png";

const HomePage = () => {
  const [filter, setFilter] = useState({
    unit: "",
    field: "",
    base: "",
    search: "",
  });
  const [search, setSearch] = useState("");
  const [isLoad, setIsLoad] = useState(true);
  const [presentValue, setPresentValue] = useState([]);
  const [absentValue, setAbsentValue] = useState([]);

  const closeLoadHandler = () => {
    setIsLoad(false);
  };
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-sm breadcrumbs'>
          <ul>
            <li>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 mr-2 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                خانه
              </button>
            </li>
            <li>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 mr-2 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                حضورغیاب
              </button>
            </li>
          </ul>
        </div>
        {/* filter */}
        <label htmlFor='my-modal-5' className='btn btn-primary m-5'>
          <HiFilter />
        </label>
        {isLoad ? (
          <input
            type='checkbox'
            id='my-modal-5'
            className='modal-toggle'
            checked
          />
        ) : (
          <input type='checkbox' id='my-modal-5' className='modal-toggle' />
        )}
        <div className='modal'>
          <div className='hero h-dashboard-screen'>
            <div
              className='hero-content flex-col lg:flex-row
            '
            >
              <img
                src={logo}
                alt='logo'
                className='max-w-sm rounded-lg shadow-2xl h-96'
              />
              <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <div className='card-body'>
                  <label htmlFor='my-modal-5' onClick={closeLoadHandler}>
                    <MdClose color='red' className='cursor-pointer' size={30} />
                  </label>
                  <h3 className='font-bold text-lg'>
                    {" "}
                    کلاس خود را انتخاب کنید
                  </h3>
                  <FilterInputs
                    filter={filter}
                    setFilter={setFilter}
                    setSearch={setSearch}
                  />
                  <div className='modal-action'>
                    <label
                      htmlFor='my-modal-5'
                      className='btn'
                      onClick={closeLoadHandler}
                    >
                      ثبت
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal-box">
            <h3 className="font-bold text-lg"> کلاس خود را انتخاب کنید</h3>
            <FilterInputs
              filter={filter}
              setFilter={setFilter}
              setSearch={setSearch}
            />
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                className="btn"
                onClick={closeLoadHandler}
              >
                ثبت
              </label>
            </div>
          </div> */}
        </div>
        {/* filter */}
      </div>
      <StudentTable
        filter={filter}
        search={search}
        presentValue={presentValue}
        setPresentValue={setPresentValue}
        absentValue={absentValue}
        setAbsentValue={setAbsentValue}
      />
    </div>
  );
};

export default HomePage;
