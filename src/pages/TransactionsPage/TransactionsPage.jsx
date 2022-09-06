import { useState, useEffect } from "react";

import { nanoid } from "nanoid";
import TransactionForm from "components/Transaction/TransactionForm/TransactionForm";
import ProductList from "components/Transaction/ProductList/ProductList";

const TransactionsPage = () => {
  const [products, setProducts] = useState(() => {
    //при первой загрузки получаем данные из локального хранилища либо записываем готовый массив контактов(обьектов)
    return (
      JSON.parse(window.localStorage.getItem("product")) ?? [
        {
          id: "id-1",
          description: "Метро",
          categories: "Транспорт",
          sum: "8.00",
        },
        {
          id: "id-2",
          description: "Бананы",
          categories: "Продукты",
          sum: "30.00",
        },
        {
          id: "id-3",
          description: "Яблоки",
          categories: "Продукты",
          sum: "25.00",
        },
        {
          id: "id-4",
          description: "Метро",
          categories: "Транспорт",
          sum: "8.00",
        },
      ]
    );
  });

  const addproduct = (description, categories, sum) => {
    const product = {
      id: nanoid(),
      description,
      categories,
      sum,
    };

    setProducts((prevState) => [product, ...prevState]);
  };

  const getlist = () => {
    return products.map((product) => {
      return product;
    });
  };

  const deleteContact = (Id) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== Id)
    );
  };

  //   // первый раз при загрузки и каждый раз при изменении компонента перезаписываем в локальное хранилище
  useEffect(() => {
    window.localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <TransactionForm onSubmit={addproduct} />
      <ProductList visible={getlist()} deleteContact={deleteContact} />
    </div>
  );
};

export default TransactionsPage;
