import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-login== h-dashboard-screen '>
      {/* <h1 className='text-9xl text-gray-800'>404</h1>
      <p className='text-3xl text-gray-800'>گم شده اید !</p> */}
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          {/* <img src={} alt="404 Error" /> */}
          <h1 className='text-6xl font-bold text-gray-700'>404</h1>
          <p className='text-xl text-gray-500'>
            صفحه ای که دنبال آن بودید پیدا نشد
          </p>
          <Link to='/'>
            <button className='btn btn-success mt-5'>برگشت به خانه</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
