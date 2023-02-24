import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../img/login-logo.png";
// import timer from "../../Timer/Timer";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  // const [timerRange, setTimerRange] = useState({
  //   days: "00",
  //   hours: "00",
  //   minutes: "00",
  //   seconds: "00",
  // });

  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://api.dotenx.com/user/management/project/2jQf88S2dwKpuOpj/login",

        {
          email: loginData.username,
          password: loginData.password,
        }
      )
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("expiretime", res.data.expirationTime);
        navigate("/");
        toast.success("خوش آمدید", {
          position: "top-right",
        });
      })
      .catch((err) =>
        toast.error("وضعیت اینترنت خود را بررسی کنید", {
          position: "top-right",
        })
      );
  };
  useEffect(() => {
    // setInterval(() => {
    //   setTimerRange(timer());
    // }, 1000);
  }, []);

  return (
    <>
      <div className='hero min-h-full relative bg-login'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={logo}
            className='max-w-sm rounded-lg shadow-2xl hidden lg:block'
          />
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <h1 className='text-3xl font-bold'>سیستم حضور و غیاب</h1>
              <form
                onSubmit={submitHandler}
                className='flex justify-center items-center flex-col h-ful'
              >
                <input
                  name='username'
                  type='text'
                  placeholder='نام کاربری'
                  className='input input-bordered w-full max-w-xs m-7'
                  onChange={changeHandler}
                />
                <input
                  name='password'
                  type='text'
                  placeholder='پسورد'
                  className='input input-bordered w-full max-w-xs m-7'
                  onChange={changeHandler}
                />
                <button
                  type='submit'
                  className='btn btn-block btn-secondary m-5'
                >
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* timer */}
        {/* <div className='grid grid-flow-row gap-5 text-center auto-cols-max fixed left-0'>
          <div className='flex flex-col'>
            <span className='font-mono text-5xl'>
              <span>{timerRange.days}</span>
            </span>
            روز
          </div>

          <div className='flex flex-col'>
            <span className='font-mono text-5xl'>
              <span>{timerRange.hours}</span>
            </span>
            ساعت
          </div>
          <div className='flex flex-col'>
            <span className='font-mono text-5xl'>
              <span>{timerRange.minutes}</span>
            </span>
            دقیقه
          </div>
          <div className='flex flex-col'>
            <span className='font-mono text-5xl'>
              <span>{timerRange.seconds}</span>
            </span>
            ثانیه
          </div>
        </div> */}
      </div>
    </>
  );
};

export default LoginPage;
