// import PropTypes from 'prop-types';
import icons from '../../assets/symbol-icons.svg';
import style from './Income.module.css';

const IncomeItem = ({ title, amount, icon }) => {
  return (
    <li className={style.incomeItem}>
      <p className={style.incomeAmount}>{amount}</p>
      {/* <div className={style.hoverEf}> */}
      <div className={style.circle}>
        <svg className={style.incomeIcon}>
          {/* <use className={style.iconTest} href={icons + '#icon-products'}></use> */}
          {/* <use className={style.icon} href={icons + `#icon-${title}`}></use> */}
          <use className={style.icon} href={`${icons}#${icon}`}></use>$
          {/* icon-extraSalary */}
          {/* icon-other */}
          {/* icon-salary */}
          {/* <use href={sprite + '#icon-whatsapp'}/> */}
        </svg>
      </div>
      {/* <div id={style.wrapper} className={style.circle}></div> */}
      {/* </div> */}
      <h3 className={style.title}>{title}</h3>
    </li>
  );
};

export default IncomeItem;
