import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { TbUserCircle } from "react-icons/tb";

const NavBar = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <nav>
      <div className="navbar bg-secondary text-secondary-content shadow-lg">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">
            علم وصنعت نوین
          </button>
          <img className="w-10 h-10" src={logo} alt="" />
        </div>
        <div className="flex-none">
          <Link to="/info">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </Link>
          <label
            htmlFor="my-drawer"
            tabIndex={0}
            className="btn btn-ghost btn-circle  drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <TbUserCircle className="w-full h-full" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 !-right-40"
            >
              <li>
                <button className="justify-between">
                  soon
                  <span className="badge-info rounded-lg p-1">بزودی</span>
                </button>
              </li>
              <li>
                <button className="justify-between">
                  soon
                  <span className="badge-info rounded-lg p-1">بزودی</span>
                </button>
              </li>
              <li>
                <button onClick={logOutHandler}>خروج</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
