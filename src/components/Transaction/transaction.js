import React from "react";
import styles from "./transaction.module.css";

const Transaction = props => {
  const { title, amount, amountzloty, date, id } = props.transaction;

  const convertedDate = new Date(date).toUTCString().slice(0, 26);

  return (
    <div className={styles.container}>
      <p className={styles.first}>{title}</p>
      <span className={styles.second}>euro:</span>{" "}
      <strong className={styles.third}>{amount} &#8364;</strong>
      <span className={styles.forth}>polish zloty:</span>{" "}
      <strong className={styles.fifth}>{amountzloty} pln</strong>
      <span className={styles.sixth}>{convertedDate}</span>
      <button onClick={() => props.delete(id)} className={styles.seventh}>
        Delete
      </button>
    </div>
  );
};

export default Transaction;
