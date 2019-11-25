import React, { Component } from "react";
import styles from "./totalAmount.module.css";
import { FaMoneyBillAlt, FaEuroSign } from "react-icons/fa";

const TotalAmount = props => {
  const transactions = props.transactions;
  const totalEuro = transactions.reduce(
    (total, transaction) => total + parseInt(transaction.amount, 10),
    0
  );
  const totalzloty = transactions.reduce(
    (total, transaction) => total + parseInt(transaction.amountzloty, 10),
    0
  );

  const totalTransactionsEuro = totalEuro.toFixed(2);
  const totalTransactionsZloty = totalzloty.toFixed(2);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Transactions: total amount</h4>

      <p className={styles.paragraph}>
        {" "}
        Total amount in Euro:{" "}
        <span>
          {totalTransactionsEuro}
          <FaEuroSign className={styles.icon} />
        </span>
      </p>
      <p className={styles.paragraph}>
        Total amount in PLN:{" "}
        <span>
          {totalTransactionsZloty}
          <FaMoneyBillAlt className={styles.icon} />
        </span>
      </p>
    </div>
  );
};

export default TotalAmount;
