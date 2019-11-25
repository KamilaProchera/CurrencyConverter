import React, { Component } from "react";
import styles from "../AddTransaction/addTransaction.module.css";
import { FaMoneyBillAlt, FaEuroSign } from "react-icons/fa";

export default class AddTransaction extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    title: "",
    amount: "",
    amountzloty: "",
    date: new Date().getTime(),
    rate: 4.2
  };

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleAmount = e => {
    this.setState({
      amount: e.target.value
    });
    console.log(e.target.value);
  };
  handleAmountInZloty = e => {
    this.setState({
      amountzloty: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { title, amount, amountzloty, date, sum } = this.state;
    const minDate = new Date(date).getTime();

    if (title.length > 2) {
      const add = this.props.add(title, amount, amountzloty, date);

      if (add) {
        this.setState({
          title: "",
          amount: "",
          amountzloty: "",
          date: new Date().getTime()
        });
      }
    } else {
      alert("The title is required");
    }
  };
  render() {
    let countedAmount = (this.state.amount * this.state.rate).toFixed(2);
    this.state.amountzloty = countedAmount;

    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Currency converter Euro/Pln</h3>
            <span className={styles.icon}> </span>{" "}
            <input
              type="text"
              placeholder="title of transaction"
              title={this.state.title}
              onChange={this.handleTitle}
              className={styles.input}
            />
            <span className={styles.icon}> T </span>
          </div>
          <div>
            <input
              type="number"
              placeholder="enter the amount you want to  convert "
              amount={this.state.amount}
              onChange={this.handleAmount}
              className={styles.input}
            />{" "}
            <span className={styles.icon}>
              {" "}
              <FaEuroSign />{" "}
            </span>
          </div>
          <div>
            <input
              type="number"
              amountzloty={countedAmount}
              value={countedAmount}
              onChange={this.handleAmountInZloty}
              className={styles.input}
            />{" "}
            <span className={styles.icon}>
              {" "}
              <FaMoneyBillAlt />
            </span>
          </div>
          <button onClick={this.handleClick} className={styles.button}>
            Add transaction
          </button>
        </form>
      </div>
    );
  }
}
