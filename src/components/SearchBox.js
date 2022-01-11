import axios from "axios";
import React, { useState } from "react";

const SearchBox = ({ setLocationId }) => {
  const [id, setId] = useState("");

  const search = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => setLocationId(res.data))
      .catch((error) => alert(error));
  };

  return (
    <>
      <input
        placeholder="Enter location ID"
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <button onClick={search}>Search</button>
    </>
  );
};

export default SearchBox;
