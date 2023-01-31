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
  const data = [
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
  return (
    <div className="h-dashboard-screen bg-chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="hidden lg:block"
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="حضور" fill="green" />
          <Bar dataKey="غیبت" fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphPage;
