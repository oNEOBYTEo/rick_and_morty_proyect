import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({ info }) => {
  const [infoCharacter, setInfoCharacter] = useState({});

  useEffect(() => {
    axios.get(info).then((res) => setInfoCharacter(res.data));
  }, [info]);

  return (
    <div className="container">
      <img className="item" src={infoCharacter?.image} alt="character" />
      <p className="item">Name: {infoCharacter?.name}</p>
      <p className="item">Status: {infoCharacter?.status}</p>
      <p className="item">Specie: {infoCharacter?.species}</p>
      <p className="item">Type: {infoCharacter?.type}</p>
      <p className="item">
        Episodes where appear: {infoCharacter?.episode?.length}
      </p>
    </div>
  );
};

export default ResidentInfo;
