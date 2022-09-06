import styles from "./ReportSection.module.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import TransactionForm from "components/Transaction/TransactionForm/TransactionForm";
import ProductList from "components/Transaction/ProductList/ProductList";
import { nanoid } from "nanoid";
import { Summary } from "components/Summary";
import Datepicker from "../DatePicker/Datepicker";
import { Report } from "../Report";

const ReportSection = () => {
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

  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");

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
    <section className={styles.reportSection}>
      <div className={styles.reportBackgroundSection}></div>
      <div className={styles.conteiner}>
        <div className={styles.balance}>
          <div className={styles.balanceAdd}>Баланс</div>
          <div className={styles.transitionReport}>
            <Report />
          </div>
        </div>

        <div className={styles.transactionSwitch}>
          <button type="button" className={styles.btn}>
            Расход
          </button>
          <button type="button" className={styles.btn}>
            Доход
          </button>
        </div>

        <div className={styles.activity}>
          {isMobile && (
            <div className={styles.transactionDate}>
              <Datepicker />
            </div>
          )}
          {isTablet && (
            <div className={styles.transaction}>
              <TransactionForm onSubmit={addproduct} />
            </div>
          )}

          <div className={styles.statement}>
            {/* <ProductList visible={getlist()} deleteContact={deleteContact} /> */}
            {isTablet && (
              <div className={styles.summary}>
                <Summary />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ReportSection };
