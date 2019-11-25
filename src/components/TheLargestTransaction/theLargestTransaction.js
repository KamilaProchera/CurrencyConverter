import React, { Component } from "react";
import Transaction from "../transactionTheLarges/transactionTheLarges/transactionTheLargest";

const TheLargestTransaction = props => {
  const transactionlist = props.transactions.filter(trans => trans);

  transactionlist.sort((a, b) => b.amount - a.amount);
  const transactions = transactionlist.map((transaction, id) => (
    <Transaction key={id} transaction={transaction} delete={props.delete} />
  ));
  return <div>{transactions.slice(0, 1)}</div>;
};

export default TheLargestTransaction;
