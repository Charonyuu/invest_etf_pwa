import { useEffect, useState } from "react";
import axios from "axios";
import { INVEST_ETF_WORTHS_BASE_URL, TEST_API_URL } from "../constant/constant";
import { stockIsOpen } from "../utils";
export default function useFetchData() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const FetchData = async (signal) => {
    setLoading(true);
    setError("");
    await axios
      .get(TEST_API_URL, { signal })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("error:" + err);
        setError(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const isOpen = stockIsOpen();
    let get_data_interval;
    if (isOpen) {
      get_data_interval = setInterval(() => {
        FetchData();
      }, 15000);
    }
    return () => {
      clearInterval(get_data_interval);
    };
  }, []);
  return { data, loading, error };
}
