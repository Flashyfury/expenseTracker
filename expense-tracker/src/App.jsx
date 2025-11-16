import Header from "./components/Header/Header";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import TransactionList from "./components/TransactionList/TransactionList";
import Summary from "./components/Summary/Summary";
import styles from "./App.module.css";
import AddCapital from "./components/AddCapital/AddCapital";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Summary capital={AddCapital}/>
      <AddTransaction />
      <TransactionList />
      <AddCapital />
     

    </div>
  );
}

export default App;
