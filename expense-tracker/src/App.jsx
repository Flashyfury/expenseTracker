import Header from "./components/Header/Header";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import TransactionList from "./components/TransactionList/TransactionList";
import Summary from "./components/Summary/Summary";
import styles from "./App.module.css";
import AddCapital from "./components/AddCapital/AddCapital";
import { useState } from "react";
<<<<<<< HEAD
import ProfileSection from "./components/profileSection/EditableProfile";
import EditableProfile from "./components/profileSection/EditableProfile";
=======
>>>>>>> 2cc5a4beba47cb582d1c5a1dc2d7076ee74c9200

function App() {
  const [capital, setCapital] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
<<<<<<< HEAD
      <EditableProfile />
=======
>>>>>>> 2cc5a4beba47cb582d1c5a1dc2d7076ee74c9200
      <Summary capital={capital}/>
      <AddTransaction />
      <TransactionList />
      <AddCapital setCapital={setCapital}/>
    </div>
  );
}

export default App;