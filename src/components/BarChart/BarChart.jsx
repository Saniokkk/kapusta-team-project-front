import styles from './BarChart.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
  Text,
} from 'recharts';

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
  const sortedData = [...items].sort((a, b) => b.sum - a.sum);

  let chartWidth = 200;
  if (sortedData.length > 2) {
    chartWidth = 83 * sortedData.length;
  }

  return (
    <ResponsiveContainer
      width={chartWidth}
      height={'100%'}
      className={styles.centered}
    >
      <BarChart
        className={styles.barChart}
        data={sortedData}
        maxBarSize={38}
        barCategoryGap={25}
        margin={{
          top: 0,
          right: 20,
          left: 30,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey='title'
          type='category'
          axisLine={false}
          tickLine={false}
          minTickGap={5}
          fontSize={12}
          fontWeight={400}
          fontFamily={'Roboto'}
          letterSpacing={'0.02em'}
          lineHeight={14}
        />
        <YAxis tickCount={600} orientation='top' hide={true} />
        <Text scaleToFit={true} width={30} />
        <Bar
          dataKey='sum'
          barSize={38}
          radius={[10, 10, 0, 0]}
          className={styles.bar}
        >
          <LabelList dataKey='sum' content={renderCustomizedLabel} />
          {sortedData.map((entry, index) => (
            <Cell fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
