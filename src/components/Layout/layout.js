import React, { Component } from "react";
import styles from "./layout.module.css";
import TheLargestTransaction from "../TheLargestTransaction/theLargestTransaction";
import TotalAmountOfTransactions from "../TotalAmoutOfTransactions/totalAmountOfTransactions";
import ListOfTransactions from "../ListOfTransactions/listOfTransactions";

import AddTransaction from "../AddTransaction/addTransaction";

class Layout extends Component {
  counter = 2;
  state = {
    transactions: [
      {
        id: 1,
        title: "Transaction number one",
        amount: 10,
        amountzloty: 42,
        date: new Date().getTime()
      },
      {
        id: 2,
        title: "Transaction number two",
        amount: 50,
        amountzloty: 210,
        date: new Date().getTime()
      }
    ]
  };

  deleteTransaction = id => {
    console.log("delete of id" + id);
    const transactions = [...this.state.transactions];

    const index = transactions.findIndex(transaction => transaction.id === id);
    transactions.splice(index, 1);

    this.setState({
      transactions
    });
  };

  addTransaction = (title, amount, amountzloty) => {
    this.counter++;
    const transaction = {
      id: this.counter,
      title,
      amount,
      amountzloty,
      date: new Date().getTime()
    };

    this.setState(prevState => ({
      transactions: [...prevState.transactions, transaction]
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className={styles.totalAmount}>
            <TotalAmountOfTransactions transactions={this.state.transactions} />
          </div>
          <div className={styles.largestTransaction}>
            <TheLargestTransaction transactions={this.state.transactions} />
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.converter}>
            <AddTransaction add={this.addTransaction} />
          </div>
          <div className={styles.listOfTransactions}>
            <ListOfTransactions
              transactions={this.state.transactions}
              delete={this.deleteTransaction}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
