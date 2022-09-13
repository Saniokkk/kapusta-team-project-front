import styles from './BarChart.module.css';
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
} from 'recharts';

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

const Chart = ({ items }) => {
  // console.log(items);
  const sortedData = [...items].sort((a, b) => b.sum - a.sum);

  let chartWidth = 200;
  if (sortedData.length > 2) {
    // chartWidth = 400;
    chartWidth = 83 * sortedData.length;
  }
  // if (sortedData.length > 6) {
  //   chartWidth = 500;
  // }
  // if (sortedData.length > 8) {
  //   chartWidth = 604;
  // }
  // if (sortedData.length > 9) {
  //   chartWidth = 704;
  // }

  // if (sortedData.length > 13) {
  //   chartWidth = 1000;
  // }
  // if (sortedData.length > 20) {
  //   chartWidth = 1500;
  // }
  return (
    // <ResponsiveContainer width={758} height='99%' className={styles.centered}>
    <ResponsiveContainer
      width={chartWidth}
      height={'100%'}
      className={styles.centered}
    >
      <BarChart
        className={styles.barChart}
        data={sortedData}
        maxBarSize={38}
        width={366}
        // width={200}
        // height={450}
        barCategoryGap={25}
        // barGap={5}
        // style={{ stroke: '#fff', strokeWidth: 2 }}
        margin={{
          top: 0,
          right: 20,
          left: 30,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid
          stroke='#f5f5f5'
          vertical={false}
          className={styles.cartesian}
        /> */}
        <XAxis
          // allowDataOverflow={false}
          dataKey='title'
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
          dataKey='sum'
          // type='number'
          // domain={[-1, 1]}
          tickCount={600}
          axisLine={false}
          tickLine={false}
          hide={true}
          label={{ position: 'top' }}
          // allowDataOverflow={false}
        />
        <Text scaleToFit={true} width={30} />
        <Bar
          dataKey='sum'
          barSize={38}
          // fill={'#FFDAC0'}
          radius={[10, 10, 0, 0]}
          // barSize={38}
          // label={{ position: 'top' }}
          // style={{ stroke: '#000' }}
          className={styles.bar}
        >
          <LabelList dataKey='sum' content={renderCustomizedLabel} />
          {/* {sortedData.map((entry, index) => ( */}
          {sortedData.map((entry, index) => (
            <Cell
              // key={entry.id}
              fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  // return (
  // <ResponsiveContainer width='99%' height={400}>
  // {/* <ResponsiveContainer width={704} height='98%'> */}
  // <ResponsiveContainer
  //   width={chartWidth}
  //   height='99%'
  //  className={styles.centered}
  //  >

  //   <BarChart
  //     // data={sortedData}
  //     data={items}
  //     maxBarSize={38}
  //     // width={400}
  //     width={400}
  //     // width={200}
  //     // height={350}
  //     barCategoryGap={25}
  //     barGap={5}
  //     // style={{ stroke: '#fff', strokeWidth: 2 }}
  //     margin={{
  //       top: 5,
  //       right: 20,
  //       left: 30,
  //       bottom: 5,
  //     }}
  //   >
  //     {/* <CartesianGrid stroke='#f5f5f5' vertical={false} /> */}
  //     <XAxis
  //       // allowDataOverflow={false}
  //       dataKey='title'
  //       axisLine={false}
  //       tickLine={false}
  //       minTickGap={5}
  //       fontSize={12}
  //       fontWeight={400}
  //       fontFamily={'Roboto'}
  //       letterSpacing={'0.02em'}
  //       domain={['dataMin', 'dataMax']}
  //     />
  //     <YAxis
  //       dataKey='sum'
  //       // type='number'
  //       // domain={[-1, 1]}
  //       tickCount={600}
  //       axisLine={false}
  //       tickLine={false}
  //       hide={true}
  //       label={{ position: 'top' }}
  //       // allowDataOverflow={false}
  //     />
  //     <Text scaleToFit={true} width={30} />
  //     {/* <Brush dataKey='name' height={30} stroke='#8884d8' /> */}
  //     <Bar
  //       dataKey='sum'
  //       barSize={38}
  //       // fill={'#FFDAC0'}
  //       radius={[10, 10, 0, 0]}
  //       // barSize={38}
  //       // label={{ position: 'top' }}
  //       // style={{ stroke: '#000' }}
  //     >
  //       <LabelList dataKey='sum' content={renderCustomizedLabel} />
  //       {/* {sortedData.map((entry, index) => ( */}
  //       {items.map((entry, index) => (
  //         <Cell
  //           // key={entry.id}
  //           fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'}
  //         />
  //       ))}
  //     </Bar>
  //     {/* <LabelList dataKey='amount' content={renderCustomizedLabel} /> */}
  //   </BarChart>
  //   {/* </ResponsiveContainer> */}
  // );
};

export default Chart;

// let formatter = new Intl.NumberFormat('ua-UA', {
//   style: 'currency',
//   currency: 'UAH',
// });
