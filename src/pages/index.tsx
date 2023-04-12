import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Counter from "@/components/Test";
import Todos from "@/components/MockingData";

export default function Home() {
  const [num1, setNum1] = useState<string>("0");
  const [num2, setNum2] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };
  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
      {/* <Todos /> */}
      <div className={styles.result} data-testid="result">
        {result}
      </div>
      <input
        type="number"
        className={styles.input}
        data-testid="num1"
        value={num1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setNum1(e.target.value)
        }
      />
      <input
        type="number"
        className={styles.input}
        data-testid="num2"
        value={num2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setNum2(e.target.value)
        }
      />
      <button onClick={add} className={styles.button} data-testid="add">
        Add
      </button>
      <button
        onClick={subtract}
        className={styles.button}
        data-testid="subtract"
      >
        Subtract
      </button>
      <button
        onClick={multiply}
        className={styles.button}
        data-testid="multiply"
      >
        Multiply
      </button>
      <button onClick={divide} className={styles.button} data-testid="divide">
        Divide
      </button>
    </div>
  );
}