import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("accessToken");
    setIsLogin(isLogin);
    !isLogin && navigate("/login");
  }, [navigate]);

  return (
    <div className="App">
      {!isLogin ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            {routes.map((r) => {
              return <Route key={Math.floor(Math.random * 100)} {...r} />;
            })}
          </Routes>
        </Layout>
      )}

      <ToastContainer
        theme="dark"
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
