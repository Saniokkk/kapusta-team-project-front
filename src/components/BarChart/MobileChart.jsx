import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  // CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Text,
  // Label,
  // Brush,
} from 'recharts';

const data = [
  {
    name: 'Продукти',
    amount: 5000,
    uv: 2323,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Алкоголь',
    amount: 200,
    uv: 2323,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Розваги',
    amount: 800,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Здоровя',
    amount: 900,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Транспорт',
    amount: 2000,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Для дому',
    amount: 1500,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Техніка',
    amount: 800,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Комунальні',
    amount: 3000,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Спорт',
    amount: 1800,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Освіта',
    amount: 1000,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Інше',
    amount: 3000,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const sortedData = data.sort((a, b) => b.amount - a.amount);

// let formatter = new Intl.NumberFormat('ua-UA', {
//   style: 'currency',
//   currency: 'UAH',
// });

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        width={10}
        height={20}
        x={x + width / 2}
        y={y - radius}
        fontSize={12}
        fontFamily='Roboto'
        fontWeight={400}
        letterSpacing={'0.02em'}
        fill='#52555F'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {value.toString() + ' грн'}
      </text>
    </g>
  );
};

const MobileChart = () => {
  return (
    <>
      <ResponsiveContainer width='99%' height={400}>
        <BarChart
          width={280}
          height={580}
          data={sortedData}
          layout='vertical'
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            type='number'
            dataKey='amount'
            // tickCount={500}
            ticks={[
              0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
              5500,
            ]}
            axisLine={false}
            tickLine={false}
            hide={true}
            domain={['dataMin', 'dataMax']}
            // label={{ position: 'insideTop' }}
            // allowDataOverflow={true}
            // type='category'
            // axisLine={false}
            // tickLine={false}
            // minTickGap={5}
            // fontSize={12}
            // fontWeight={400}
            // fontFamily={'Roboto'}
            // letterSpacing={'0.02em'}
          ></XAxis>
          <YAxis
            type='category'
            dataKey='name'
            axisLine={false}
            tickLine={false}
            // minTickGap={5}
            fontSize={12}
            fontWeight={400}
            fontFamily={'Roboto'}
            letterSpacing={'0.02em'}
            // type='number'
            // domain={}
            // domain={[-1, 1]}
            // orientation='right'
          />
          <Text scaleToFit={true} width={30} />
          {/* <Brush dataKey='name' height={30} stroke='#8884d8' /> */}
          <Bar
            dataKey='amount'
            // fill={'#FFDAC0'}
            radius={[0, 10, 10, 0]}
            barSize={15}
            // label={{ position: 'top' }}
            // style={{ stroke: '#000' }}
          >
            <LabelList dataKey='amount' content={renderCustomizedLabel} />
            {data.map((entry, index) => (
              <Cell fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'} />
            ))}
          </Bar>
          {/* <LabelList dataKey='amount' content={renderCustomizedLabel} /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default MobileChart;
