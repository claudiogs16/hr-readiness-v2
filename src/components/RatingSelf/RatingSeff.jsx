import DesignCard from "../DesignCard/DesignCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Janeiro",
    pv: 5,
  },
  {
    name: "Fevereiro",
    pv: 2,
  },
  {
    name: "Março",
    pv: 4,
  },
];

const RatingSelf = () => {
  return (
    <DesignCard title="Minhas Avaliações" subtitle="Ultimos 3 meses">
      <div style={{marginTop: '30px'}}>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
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
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </DesignCard>
  );
};

export default RatingSelf;
