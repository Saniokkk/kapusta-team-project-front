import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import styles from './BarChart.module.css';

const renderCustomizedLabel = ({ x, y, width, value }) => {
  const label = value ? value.toString() + ' грн' : '';
  if (width < 90) {
    width = 90;
  }
  return (
    <g>
      <text
        // width={11}
        y={y}
        x={width}
        dx={0}
        dy={-10}
        fontSize={11}
        fontFamily='Roboto'
        fontWeight={400}
        letterSpacing={'0.02em'}
        fill='#52555F'
        textAnchor='middle'
      >
        {label}
      </text>
    </g>
  );
};
const renderBarLabel = (props) => {
  const { x, y, value } = props;
  let label = value;
  if (value.length > 8) {
    label = value.substr(0, 8) + '...';
  }

  return (
    <g>
      <text
        x={x}
        y={y}
        dx={0}
        dy={-10}
        fontSize={11}
        fontFamily='Roboto'
        fontWeight={400}
        letterSpacing={'0.02em'}
        fill='#52555F'
      >
        {label}
      </text>
    </g>
  );
};

const MobileChart = ({ items }) => {
  const sortedData = [...items].sort((a, b) => b.sum - a.sum);
  let chartHeight = 83 * sortedData.length;

  return (
    <>
      <ResponsiveContainer
        width='99%'
        height={chartHeight}
        className={styles.centered}
      >
        <BarChart
          data={sortedData}
          layout='vertical'
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 0,
          }}
        >
          <XAxis
            type='number'
            dataKey='sum'
            tickCount={600}
            hide
            allowDataOverflow={true}
            minTickGap={5}
          ></XAxis>
          <YAxis type='category' dataKey='title' hide />

          <Bar
            dataKey='sum'
            fill={'#FFDAC0'}
            radius={[0, 10, 10, 0]}
            barSize={15}
            label={renderCustomizedLabel}
          >
            <LabelList
              dataKey='title'
              content={renderBarLabel}
              fill='#52555F'
            />
            {sortedData.map((entry, index) => (
              <Cell fill={index % 3 === 0 ? '#FF751D' : '#FFDAC0'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default MobileChart;
