import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraphPage = () => {
  const [searchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get("id"));
  const [userData, setUserData] = useState();
  const dataHandler = (data) => {
    setUserData(data);
    const pcount = data.mehr.filter((value) => value).length;
    const acount = data.mehr.length - pcount;
    // console.log(pcount, acount);
    chartData.push({
      name: "مهر",
      حضور: pcount,
      غیبت: acount,
    });
    console.log(chartData);
  };

  const chartHandler = async () => {
    await axios
      .post(
        "https://api.dotenx.com/database/query/select/project/2jQf88S2dwKpuOpj/table/students",
        {
          columns: ["name", "unit", "field", "base", "id", "mehr"],
          filters: {
            filterSet: [
              {
                key: "id",
                operator: "=",
                value: id,
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
      .then((res) => {
        dataHandler(res.data.rows[0]);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    chartHandler();
    if (userData) dataHandler();
  }, []);
  const chartData = [
    {
      name: "مهر",
      حضور: 10,
      غیبت: 20,
    },
    {
      name: "آبان",
      حضور: 30,
      غیبت: 0,
    },
    {
      name: "آذر",
      حضور: 30,
      غیبت: 0,
    },
    {
      name: "دی",
      حضور: 27,
      غیبت: 3,
    },
    {
      name: "بهمن",
      حضور: 28,
      غیبت: 2,
    },
    {
      name: "اسفند",
      حضور: 25,
      غیبت: 5,
    },
    {
      name: "فروردین",
      حضور: 29,
      غیبت: 1,
    },
    {
      name: "اردیبهشت",
      حضور: 20,
      غیبت: 10,
    },
    {
      name: "خرداد",
      حضور: 18,
      غیبت: 12,
    },
  ];
  if (!userData)
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
    <div className='h-dashboard-screen flex flex-col items-center justify-center bg-chart'>
      <div>item 1</div>
      <ResponsiveContainer width='80%' height='75%' className='hidden lg:block'>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='حضور' fill='green' />
          <Bar dataKey='غیبت' fill='red' />
        </BarChart>
      </ResponsiveContainer>
      <div className='stats stats-vertical lg:stats-horizontal shadow mt-5 bg-success'>
        <div className='stat'>
          <div className='stat-title'>نام دانش آموز</div>
          <div className='stat-value  text-sm'>{userData && userData.name}</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>پایه</div>
          <div className='stat-value  text-sm'>{userData && userData.base}</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>رشته</div>
          <div className='stat-value text-sm'>{userData && userData.field}</div>
        </div>
      </div>
    </div>
  );
};

export default GraphPage;
