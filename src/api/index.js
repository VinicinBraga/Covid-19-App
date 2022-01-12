import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deths, lastUpdate },
    } = await axios.get(url);

    const modifieData = {
      confirmed,
      recovered,
      deths,
      lastUpdate,
    };

    return modifieData;
  } catch (error) {}
};
