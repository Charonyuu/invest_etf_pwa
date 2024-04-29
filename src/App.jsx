import React from "react";
import Nav from "./component/nav";

import useGetStock from "./hooks/useGetStock";
import Loading from "./component/Loading";
import DataList from "./component/DataList";

function App() {
  const { isLoading, error } = useGetStock();

  return (
    <>
      <Nav />
      {isLoading ? <Loading error={error} /> : <DataList />}
    </>
  );
}

export default App;
