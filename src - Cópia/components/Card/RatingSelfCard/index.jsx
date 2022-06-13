import MainCard from "..";
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

const RatingSeflCard = () => {
  return (
    <MainCard
      title="Minhas Avaliações"
      subtitle="Ultimos 3 meses"
    >
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
    </MainCard>
  );
};

export default RatingSeflCard;
