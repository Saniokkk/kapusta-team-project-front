// import styles from './BarChart.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
  Text,
  // Brush,
} from 'recharts';
const data = [
  {
    name: 'Заробітня плата',
    amount: 5000,
  },
  {
    name: 'Додаткові доходи',
    amount: 200,
  },
  {
    name: 'Інше',
    amount: 2000,
  },
];

// const data = [
//   {
//     name: 'Продукти',
//     amount: 5000,
//   },
//   {
//     name: 'Алкоголь',
//     amount: 200,
//   },
//   {
//     name: 'Розваги',
//     amount: 800,
//   },
//   {
//     name: 'Здоровя',
//     amount: 900,
//   },
//   {
//     name: 'Транспорт',
//     amount: 2000,
//   },
//   {
//     name: 'Для дому',
//     amount: 1500,
//   },
//   {
//     name: 'Техніка',
//     amount: 800,
//   },
//   {
//     name: 'Комунальні',
//     amount: 3000,
//   },
//   {
//     name: 'Спорт',
//     amount: 1800,
//   },
//   {
//     name: 'Освіта',
//     amount: 1000,
//   },
//   {
//     name: 'Інше',
//     amount: 3000,
//   },

// ];

const sortedData = data.sort((a, b) => b.amount - a.amount);

// let formatter = new Intl.NumberFormat('ua-UA', {
//   style: 'currency',
//   currency: 'UAH',
// });

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
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

const Chart = () => {
  return (
    <>
      <ResponsiveContainer width='99%' height={400}>
        <BarChart
          // width={605}
          width={200}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 120,
            left: 120,
            bottom: 5,
          }}
          barCategoryGap={10}
          barGap={10}

          // layout='vertical'
        >
          <CartesianGrid stroke='#f5f5f5' vertical={false} />
          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            minTickGap={5}
            fontSize={12}
            fontWeight={400}
            fontFamily={'Roboto'}
            letterSpacing={'0.02em'}
            domain={['dataMin', 'dataMax']}
          />
          <YAxis
            dataKey='amount'
            type='number'
            // domain={}
            // domain={[-1, 1]}
            // orientation='right'
            tickCount={500}
            ticks={[
              0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
              5500,
            ]}
            axisLine={false}
            tickLine={false}
            hide={true}
            label={{ position: 'top' }}
            allowDataOverflow={true}
            // type='category'
          />
          <Text scaleToFit={true} width={30} />
          {/* <Brush dataKey='name' height={30} stroke='#8884d8' /> */}
          <Bar
            dataKey='amount'
            // fill={'#FFDAC0'}
            radius={[10, 10, 0, 0]}
            barSize={38}
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

export default Chart;
// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

//   render() {
//     return (
//       <ResponsiveContainer width='100%' height='100%'>
//         <BarChart width={150} height={40} data={data}>
//           <Bar dataKey='uv' fill='#8884d8' />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }
