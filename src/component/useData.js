import React, { useEffect, useState } from "react";
import axios from "axios";

const useData = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setloading(true);
      axios("./data.json")
        .then((data) => setdata(data))
        .then(setloading(false));
    };
    fetchData();
  }, []);
  return [loading, data];
};

export default useData;
