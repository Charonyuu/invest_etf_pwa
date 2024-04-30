import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineFall, AiOutlineRise, AiOutlineSwap } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { AppContext } from "../provider/index.jsx";
import Search from "./Search";
import useGetStock from "../../hooks/useGetStock";
import { cn } from "../../utils";

export default function Nav() {
  const { star, handleToggleStar, sort, handleSort } = useContext(AppContext);
  const { refetch, isFetching } = useGetStock();
  return (
    <div className="my-2 flex items-center justify-between">
      <Search />
      <div className="flex items-center ml-2 space-x-2">
        <button
          className={cn(
            "border border-gray-300 text-yellow-300 w-8 h-8 flex justify-center items-center rounded-md cursor-pointer shadow-sm"
          )}
          onClick={handleSort}
        >
          {sort === "asc" ? (
            <AiOutlineFall className="text-green-500" />
          ) : sort === "desc" ? (
            <AiOutlineRise className="text-red-500" />
          ) : (
            <AiOutlineSwap className="text-black" />
          )}
        </button>
        <button
          className={cn(
            "border border-gray-300 text-yellow-300 w-8 h-8 flex justify-center items-center rounded-md cursor-pointer shadow-sm"
          )}
          onClick={handleToggleStar}
        >
          {star ? <FaStar /> : <FaRegStar />}
        </button>
        <button
          className={cn(
            "border border-gray-300  w-8 h-8 flex justify-center items-center rounded-md cursor-pointer shadow-sm"
          )}
          onClick={refetch}
        >
          <IoMdRefresh className={isFetching && "animate-spin"} />
        </button>
      </div>
      {/* 
      <div className={styles.btn_group}>
        <div
          onClick={() => option_handler("favorite")}
          className={classnames(styles.icon, {
            [styles.be_chosen]: option === "favorite",
          })}
        >
          <HeartIcon />
        </div>
        <div
          onClick={() => option_handler("percent")}
          className={classnames(styles.icon, {
            [styles.be_chosen]: option === "percent",
          })}
        >
          1%
        </div>
        <div
          onClick={() => toggle_handler()}
          className={classnames(styles.icon, { [styles.down]: allToggle })}
        >
          <UpIcon />
        </div>
        <div onClick={refresh_hanlder} className={styles.icon}>
          <RefreshIcon
            className={isRefresh ? styles.refreshing : null}
            onAnimationEnd={() => setIsRefresh(false)}
          />
        </div>
      </div> */}
    </div>
  );
}
