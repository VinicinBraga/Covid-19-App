import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
      console.log(dailyData);
    };
    fetchApi();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData(({ date }) => date),
        datasets: [{}, {}],
      }}
    />
  ) : null;

  return <h1>Chart</h1>;
};

export default Chart;
