import spriteIcons from '../../assets/sprite-icons.svg';
import styles from './CardExpenses.module.scss';

// { title: 'Продукти', pathIcon: 'products', sum: 5000.0 },

// const categoryItems = [
//   {
//     category: 'products',
//     sum: 100,
//     description: 'banana',
//   },
//   {
//     category: 'products',
//     sum: 200,
//     description: 'carrot',
//   },
// ];
export const CardExpenses = ({ pathIcon, title, sum }) => {
  // const [chartTitle, setChartTitle] = useState([]);
  // const [chartSum, setChartSum] = useState([]);

  const onBtnClick = (path) => {
    // const res = categoryItems.filter((item) => path === item.category);
    // console.log(res);
    // setChartTitle((prevState) => [...prevState, item.description]);
  };

  // console.log('path', path);

  // const getCategoryItems = () => {
  //   categoryItems.map((item) => {
  //     if (pathIcon === item.category) {
  //       setChartTitle(item.description);
  //       setChartSum(item.sum);
  //     }
  //   });
  // };

  // useEffect(() => {

  //   getCategoryItems();
  // }, []);

  // console.log('chartTitle', chartTitle);
  // console.log('chartSum', chartSum);

  return (
    <li className={styles.item}>
      <p className={styles.amount}>{sum}.00</p>

      <svg
        className={styles.icon}
        onClick={() => {
          onBtnClick(pathIcon);
          // console.log('pathIcon', pathIcon);
        }}
      >
        <use
          className={styles.svg1}
          href={`${spriteIcons}#icon-${pathIcon}_bg`}
        ></use>
        <use
          className={styles.svg2}
          href={`${spriteIcons}#icon-${pathIcon}`}
        ></use>
      </svg>

      <p className={styles.title}>{title}</p>
    </li>
  );
};

// const items = [
//   {
//     title: 'Продукти',
//     pathIcon: 'products',
//     sum: 5000.0,
//     category: 'products',
//     description: 'banana',
//   },
// ];
// {
//   "id": "630c6424c4126b2f6d97fa7f",
//   "date": "2022-01-01T00:00:00.000Z",
//   "owner": "_id: 630a4ce122d8de88190363c9",
//   "description": "banana",
//   "category": "products",
//   "sum": 100,
//   "createdAt": "2022-08-29T07:00:52.786Z",
//   "updatedAt": "2022-08-29T07:00:52.786Z"
// }

// {
//   "id": "630c6424c4126b2f6d97fa7f",
//   "date": "2022-01-01T00:00:00.000Z",
//   "owner": "_id: 630a4ce122d8de88190363c9",
//   "description": "premium",
//   "category": "Доп.дохід",
//   "sum": 6500,
//   "createdAt": "2022-08-29T07:00:52.786Z",
//   "updatedAt": "2022-08-29T07:00:52.786Z"
// }
