import PropTypes from 'prop-types';
import styles from './BackgroundBottom.module.scss';

const BackgroundBottom = ({ children }) => {
  return (
    <div className={styles.incomeSection}>
      {children}
      <div className={styles.background}></div>
    </div>
  );
};

BackgroundBottom.propTypes = {
  children: PropTypes.node,
};
export default BackgroundBottom;
