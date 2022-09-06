import React, { useEffect, useState, createContext, useContext } from "react";

const DataContext = createContext<any>(undefined);

const DataWrapper = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json"
      );
      const output = await res.json();
      setData(output);
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

export { DataWrapper, useDataContext };
