const func = (acc, item, path, title = item[0]) => {
  return acc.push({
    title: title,
    pathIcon: path,
    sum: item[1],
  });
};
// const func = (acc, item, path, title = item[0]) => {
//   return acc.push({
//     ['title']: title,
//     ['pathIcon']: path,
//     ['sum']: item[1],
//   });
// };

export const localizationExpense = (obj) => {
  const arr = Object.entries(obj);

  const filterArr = arr.filter((item) => {
    return item[1] > 0;
  });

  const arrCategory = filterArr.reduce((acc, item) => {
    switch (item[0]) {
      case "Транспорт":
        func(acc, item, "transport");
        break;
      case "Продукти":
        func(acc, item, "products");
        break;
      case "Здоровя":
        func(acc, item, "health", "Здоров'я");
        break;
      case "Алкоголь":
        func(acc, item, "alcohol");
        break;
      case "Розваги":
        func(acc, item, "entertainment");
        break;
      case "Дім":
        func(acc, item, "housing");
        break;
      case "Техніка":
        func(acc, item, "tools");
        break;
      case "Комуналка":
        func(acc, item, "invoice");
        break;
      case "Спорт, хобі":
        func(acc, item, "hobby");
        break;
      case "Освіта":
        func(acc, item, "education");
        break;
      case "Інше":
        func(acc, item, "other");
        break;
      default:
    }
    return acc;
  }, []);
  return arrCategory;
};

export const localizationIncome = (obj) => {
  const arr = Object.entries(obj);

  const filterArr = arr.filter((item) => {
    return item[1] > 0;
  });

  const arrCategory = filterArr.reduce((acc, item, index) => {
    switch (item[0]) {
      case "Дохід":
        func(acc, item, "salary");
        break;
      case "Доп.дохід":
        func(acc, item, "extraSalary");
        break;
      default:
    }
    return acc;
  }, []);
  return arrCategory;
};

const totalExpanseByCategory = {
  Транспорт: 3500,
  Продукти: 9000,
  Здоровя: 2000,
  Алкоголь: 0,
  Розваги: 3500,
  Дім: 8000,
  Техніка: 0,
  Комуналка: 1750,
  "Спорт, хобі": 1500,
  Освіта: 3500,
  Інше: 200,
};

console.log(localizationExpense(totalExpanseByCategory));
