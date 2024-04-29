import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { stockIsOpen } from "../utils";
import { INVEST_ETF_WORTHS_BASE_URL } from "../constant/constant";
import axios from "axios";
import { AppContext } from "../component/provider/index.jsx";

export default function useGetStock() {
  const { search, star, storedStock, sort } = useContext(AppContext);
  const fetchStockApi = async () => {
    try {
      const { data } = await axios.get(INVEST_ETF_WORTHS_BASE_URL);
      const result = data
        .filter((item) => item.msgArray) // 过滤掉没有 msgArray 的数据项
        .map((item) => item.msgArray)
        .flat();
      return result;
    } catch (error) {
      throw new Error("Failed to fetch stock data: " + error.message);
    }
  };
  const { data, error, refetch, isFetching, isStale, isLoading } = useQuery({
    queryKey: ["stock"],
    queryFn: fetchStockApi,
  });
  let result = data;
  if (search) {
    result = result?.filter(
      (item) => item.a.includes(search) || item.b.includes(search)
    );
  }
  if (star) {
    result = result?.filter((item) => storedStock.includes(item.a));
  }
  let sortedResult = result;

  if (sort) {
    if (sort === "asc") {
      sortedResult = [...result].sort((a, b) => a.g - b.g);
    } else {
      sortedResult = [...result].sort((a, b) => b.g - a.g);
    }
  }

  result = sort !== "" ? sortedResult : result;

  useEffect(() => {
    const isOpen = stockIsOpen();
    let getDataInterval;
    if (isOpen) {
      getDataInterval = setInterval(() => {
        refetch();
      }, 15000);
    }
    return () => {
      clearInterval(getDataInterval);
    };
    // eslint-disable-next-line
  }, []);

  return { data: result, error, refetch, isFetching, isStale, isLoading };
}
