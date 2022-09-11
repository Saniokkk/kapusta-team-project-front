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
  Label,
  // Label,
  // Brush,
} from 'recharts';

// const data = [
//   {
//     title: 'Продукти',
//     amount: 5000,
//   },
//   {
//     title: 'Алкоголь',
//     amount: 200,
//   },
//   {
//     title: 'Розваги',
//     amount: 800,
//   },

// ];

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
        // textAnchor='middle'
        dominantBaseline='middle'
        textAnchor='start'
      >
        {value.toString() + ' грн'}
      </text>
    </g>
  );
};

const MobileChart = ({ items }) => {
  console.log(items);
  const sortedData = [...items].sort((a, b) => b.sum - a.sum);
  console.log(sortedData);
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
            dataKey='num'
            // tickCount={500}
            ticks={[
              0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
              5500,
            ]}
            // axisLine={true}
            // tickLine={false}
            hide={true}
            domain={['dataMin', 'dataMax']}
            label={{ position: 'insideTop' }}

            // allowDataOverflow={true}
            // type='category'

            // minTickGap={5}
            // fontSize={12}
            // fontWeight={400}
            // fontFamily={'Roboto'}
            // letterSpacing={'0.02em'}
          ></XAxis>
          <YAxis
            type='category'
            dataKey='title'
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
          ></YAxis>
          {/* <Text scaleToFit={true} width={30} /> */}
          {/* <Brush dataKey='name' height={30} stroke='#8884d8' /> */}
          <Bar
            dataKey='sum'
            // fill={'#FFDAC0'}
            radius={[0, 10, 10, 0]}
            barSize={15}
            // label={{ position: 'top' }}
            // style={{ stroke: '#000' }}
          >
            <LabelList
              dataKey='sum'
              content={renderCustomizedLabel}
              position='insideTopRight'
            />
            {sortedData.map((entry, index) => (
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
