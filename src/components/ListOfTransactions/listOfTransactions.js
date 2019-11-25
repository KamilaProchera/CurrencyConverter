import React, { Component } from "react";
import Transaction from "../Transaction/transaction";
import styles from "./listOfTransactions.module.css";

const ListOfTransactions = props => {
  const transactionlist = props.transactions.filter(trans => trans);

  transactionlist.sort((a, b) => b.date - a.date);

  const transactions = transactionlist.map((transaction, index) => (
    <Transaction key={index} transaction={transaction} delete={props.delete} />
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        List of transactions<span>(last 10 transactions)</span>
      </h1>
      {transactions.length > 0 ? (
        transactions.slice(0, 10)
      ) : (
        <p>No transaction</p>
      )}
    </div>
  );
};

export default ListOfTransactions;
