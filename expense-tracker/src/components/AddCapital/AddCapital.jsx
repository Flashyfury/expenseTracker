import { useState } from "react";
import styles from "./AddCapital.module.css";

function AddCapital({ setCapital }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(input);

    if (!amount || amount < 0) return alert("Enter a valid amount");

    setCapital(amount);
    setInput("");
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Add Monthly Capital</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="number"
          placeholder="Enter total fund / bank amount"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Save Capital
        </button>
      </form>
    </div>
  );
}

export default AddCapital;
