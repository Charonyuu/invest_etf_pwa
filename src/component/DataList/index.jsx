import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { cn, formatDate, formatPrice } from "../../utils";
import { RiRefreshLine } from "react-icons/ri";
import { AppContext } from "../provider/index.jsx";
import useGetStock from "../../hooks/useGetStock";

export default function DataList() {
  const { storedStock, handleClickStar } = useContext(AppContext);
  const { data } = useGetStock();

  return (
    <>
      {data?.map((item, index) => {
        const latestTime = formatDate(item.i, item.j);
        const overPrice = item.g > 0; //超過淨值
        return (
          <article
            className="rounded-lg border-b border-gray-100 bg-white py-4"
            key={item.a}
          >
            <div>
              <p className="text-sm text-gray-500 truncate flex items-center">
                <button
                  onClick={() => handleClickStar(item.a)}
                  className="cursor-pointer text-yellow-400 flex-shrink-0 mb-0.5 mr-1"
                >
                  {storedStock.includes(item.a) ? <FaStar /> : <FaRegStar />}
                </button>
                {item.a}
                {item.b}
              </p>
              <p className="text-sm text-gray-600">目前價格</p>
              <p className="text-2xl font-medium text-gray-900">
                ${formatPrice(item.e)}
              </p>
              <p className="text-xs text-gray-600">預估淨值</p>
              <h4 className="text-sm">${formatPrice(item.f)}</h4>
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <p
                className={cn(
                  "flex items-center mt-1 gap-1",
                  overPrice ? "text-red-600" : "text-green-600"
                )}
              >
                {overPrice ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                )}
                <span className="text-sm  font-medium">
                  {formatPrice(item.g)}%
                </span>
              </p>
              <span className="text-gray-500 text-xs flex items-center">
                <RiRefreshLine className="mr-1" /> {latestTime}{" "}
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
}
