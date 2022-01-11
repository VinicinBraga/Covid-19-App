import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
