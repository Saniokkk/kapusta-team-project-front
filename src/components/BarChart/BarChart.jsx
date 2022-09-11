import styles from './BarChart.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Text,
} from 'recharts';

// const items = [
//   {
//     id: 1,
//     title: 'банани',
//     sum: 5000.0,
//   },
// ];

//  { title: 'Продукти', pathIcon: 'products', sum: 5000.0 },
const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;

  return (
    <g>
      <text
        width={10}
        height={20}
        x={x + width / 2}
        y={y - 10}
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
  // let chartWidth = 600;
  // if (items.length > 10){
  //   chartWidth=65*items.length
  // }
  const sortedData = [...items].sort((a, b) => b.sum - a.sum);

  let chartWidth = 200;
  if (sortedData.length > 2) {
    chartWidth = 400;
  }
  if (sortedData.length > 6) {
    chartWidth = 500;
  }
  if (sortedData.length > 8) {
    chartWidth = 604;
  }
  if (sortedData.length > 9) {
    chartWidth = 704;
  }

  if (sortedData.length > 13) {
    chartWidth = 1000;
  }
  if (sortedData.length > 20) {
    chartWidth = 1500;
  }

  return (
    <>
      <ResponsiveContainer
        width={chartWidth}
        height='99%'
        className={styles.centered}
      >
        <BarChart
          // data={sortedData}
          data={items}
          maxBarSize={38}
          // width={400}
          width={400}
          // width={200}
          // height={350}
          barCategoryGap={25}
          barGap={5}
          // style={{ stroke: '#fff', strokeWidth: 2 }}
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' vertical={false} />
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
            // ticks={[
            //   0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
            //   5500,
            // ]}
          />
          <YAxis
            dataKey='sum'
            type='number'
            tickCount={600}
            axisLine={false}
            tickLine={false}
            hide={true}
            label={{ position: 'top' }}
            // allowDataOverflow={false}
          />
          <Text scaleToFit={true} width={30} />
          {/* <Brush dataKey='name' height={30} stroke='#8884d8' /> */}
          <Bar
            dataKey='sum'
            barSize={38}
            // fill={'#FFDAC0'}
            radius={[10, 10, 0, 0]}
            // barSize={38}
            // label={{ position: 'top' }}
            // style={{ stroke: '#000' }}
          >
            <LabelList
              dataKey='sum'
              content={renderCustomizedLabel}
              fill='#52555F'
            />
            {/* {sortedData.map((entry, index) => ( */}
            {items.map((entry, index) => (
              <Cell
                // key={entry.id}
                // key={`cell-${index}`}
                fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'}
              />
            ))}
          </Bar>
          {/* <LabelList dataKey='amount' content={renderCustomizedLabel} /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;

// let formatter = new Intl.NumberFormat('ua-UA', {
//   style: 'currency',
//   currency: 'UAH',
// });
