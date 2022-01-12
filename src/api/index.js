import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifieData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifieData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    console.log(`Daily Data${data}`);
  } catch (error) {}
};
