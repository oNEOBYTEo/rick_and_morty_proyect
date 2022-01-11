import axios from "axios";
import { useEffect, useState } from "react";

const AxiosRequest = () => {
  const [data, setData] = useState({});

  const getNumber = (max) => Math.floor(Math.random() * max) + 1;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getNumber(19)}`)
      .then((res) => setData(res.data));
  }, []);

  return [data, setData];
};

export default AxiosRequest;
