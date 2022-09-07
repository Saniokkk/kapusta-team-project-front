import s from "./Summary.module.scss";

export function Summary() {
  const data = {
    data: {
      incomeTransactions: [
        {
          _id: "1",
          date: "2022-06-27T00:00:00.000Z",
          owner: "630a4ce122d8de88190363c9",
          description: "1",
          category: "income",
          sum: 500,
          type: "income",
          createdAt: "2022-08-30T16:57:07.350Z",
          updatedAt: "2022-08-30T16:57:07.350Z",
        },
      ],
      expenseTransactions: [
        {
          _id: "2",
          date: "2022-06-27T00:00:00.000Z",
          owner: "630a4ce122d8de88190363c9",
          description: "1111",
          category: "alcohol",
          sum: 100,
          type: "expense",
          createdAt: "2022-08-30T16:11:15.591Z",
          updatedAt: "2022-08-30T16:11:15.591Z",
        },
        {
          _id: "3",
          date: "2022-07-27T00:00:00.000Z",
          owner: "630a4ce122d8de88190363c9",
          description: "1111",
          category: "alcohol",
          sum: 100,
          type: "expense",
          createdAt: "2022-08-30T16:11:15.591Z",
          updatedAt: "2022-08-30T16:11:15.591Z",
        },
        {
          _id: "4",
          date: "2022-08-27T00:00:00.000Z",
          owner: "630a4ce122d8de88190363c9",
          description: "1111",
          category: "alcohol",
          sum: 100,
          type: "expense",
          createdAt: "2022-08-30T16:11:15.591Z",
          updatedAt: "2022-08-30T16:11:15.591Z",
        },
        {
          _id: "5",
          date: "2022-09-27T00:00:00.000Z",
          owner: "630a4ce122d8de88190363c9",
          description: "1111",
          category: "alcohol",
          sum: 100,
          type: "expense",
          createdAt: "2022-08-30T16:11:15.591Z",
          updatedAt: "2022-08-30T16:11:15.591Z",
        },
      ],
      totalExpense: 300,
      totalIncome: 1000,
    },
  };

  const { expenseTransactions, totalExpense } = data.data;

  function convertDate(date) {
    const convDate = new Date(date)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      .slice(0, -8);

    return convDate;
  }

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("uk-UA", {
      month: "long",
    });
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Зведення</h2>
      <ul className={s.list}>
        {expenseTransactions.map(({ _id, date }) => (
          <li key={_id}>
            <span>{toMonthName(convertDate(date))}</span>
            <span>{totalExpense}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
