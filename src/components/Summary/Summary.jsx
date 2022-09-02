import styles from "./Summary.module.scss";

export function Summary() {
  const data = {
    data: {
      incomeTransactions: [
        {
          _id: "630e4163fef5a6fb1aa8b74d",
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
          _id: "630e36a3c9827686e79c4594",
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
          _id: "630e36a3c9827686e79c4594",
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
          _id: "630e36a3c9827686e79c4594",
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
          _id: "630e36a3c9827686e79c4594",
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
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Підсумок</h2>
      <ul className={styles.list}>
        {expenseTransactions.map(({ date }) => (
          <li>
            <span>{toMonthName(convertDate(date))}</span>
            <span>{totalExpense}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
