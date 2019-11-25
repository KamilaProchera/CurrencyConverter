import React from "react";
import styles from "./transactionTheLargest.module.css";
import { FaMoneyBillAlt, FaEuroSign } from "react-icons/fa";

const Transaction = props => {
  const { amount, amountzloty, title, date } = props.transaction;

  const convertedDate = new Date(date).toUTCString().slice(0, 26);

  const amountE = parseInt(amount, 10);
  const amountZ = parseInt(amountzloty, 10);
  const amountEuro = amountE.toFixed(2);
  const amountZloty = amountZ.toFixed(2);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>The biggest transaction</h4>

      <p className={styles.transaction_title}>{title}</p>
      <p className={styles.paragrath}>
        The amount of euro: {amountEuro} <FaEuroSign className={styles.icon} />
      </p>
      <p className={styles.paragrath}>
        {" "}
        The amount in zloty: {amountZloty}
        <FaMoneyBillAlt className={styles.icon} />{" "}
      </p>
      <p className={styles.date}>{convertedDate}</p>
    </div>
  );
};
export default Transaction;
