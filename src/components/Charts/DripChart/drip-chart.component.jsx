import { Radar, RadarChart, Legend, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const data = [
  {
    subject: 'Administração',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'R.H',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'T.I',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Tec.Sistemas',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Informação',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Outros',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const DripChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="R.H" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="CEO" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default DripChart;
