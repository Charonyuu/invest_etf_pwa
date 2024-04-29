import React from "react";

export default function Loading({ error }) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <div class="flex gap-2">
        <div class="w-5 h-5 rounded-full bg-red-400 animate-bounce"></div>
        <div
          class="w-5 h-5 rounded-full bg-orange-400 animate-bounce"
          style={{ animationDelay: "100ms" }}
        ></div>
        <div
          class="w-5 h-5 rounded-full bg-yellow-400 animate-bounce"
          style={{ animationDelay: "200ms" }}
        ></div>
        <div
          class="w-5 h-5 rounded-full bg-green-400 animate-bounce "
          style={{ animationDelay: "300ms" }}
        ></div>
        <div
          class="w-5 h-5 rounded-full bg-blue-400 animate-bounce "
          style={{ animationDelay: "400ms" }}
        ></div>
      </div>
      <p className={error ? "text-red-500" : "text-gray-400"}>
        {error || "抓取資料中..."}
      </p>
    </div>
  );
}
