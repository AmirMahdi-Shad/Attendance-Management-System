import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { FcAddDatabase, FcComboChart } from "react-icons/fc";
import { GiExitDoor } from "react-icons/gi";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expiretime");
    navigate("/login");
  };
  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* <!-- Page content here --> */}
        <NavBar />
        <main className='h- w-full'>{children}</main>
      </div>
      <div className='drawer-side shadow-2xl'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu overflow-y-auto  bg-neutral text-neutral-content w-64 p-2 flex flex-col justify-between'>
          {/* <!-- Sidebar content here --> */}
          <div>
            <Link to='/'>
              <li>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  حضور و غیاب
                </a>
              </li>
            </Link>
            <Link to='/addUsers'>
              <li>
                <a>
                  <FcAddDatabase size={20} />
                  افزودن دانش آموز
                </a>
              </li>
            </Link>

            <Link to='/dailyattendance/selectClass'>
              <li>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                  حضور غیاب روزانه
                </a>
              </li>
            </Link>
            <Link to='/selectuser'>
              <li>
                <a>
                  <FcComboChart size={20} />
                  آنالیز حضور
                </a>
              </li>
            </Link>
          </div>
          <div>
            <li
              onClick={logOutHandler}
              className='text-red-600 text-center rounded-xl mb-3'
            >
              <a>
                <GiExitDoor size={40} />
                خروج
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
