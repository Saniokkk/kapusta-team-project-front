import MobileChart from 'components/BarChart/MobileChart';
import Chart from 'components/BarChart/BarChart';
import useWindowDimensions from 'hooks/useWindowDimensions';

const ReportChart = ({ items }) => {
  const viewPort = useWindowDimensions();
  return (
    <>
      {viewPort.width < 767 ? (
        <MobileChart items={items} />
      ) : (
        <Chart items={items} />
      )}
    </>
  );
};

export default ReportChart;
