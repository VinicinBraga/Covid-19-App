import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs";
import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyState, setDailyState] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyState(await fetchDailyData());
    };
    fetchApi();
  });

  const lineChart = <Line />;

  return <h1>Chart</h1>;
};

export default Chart;
