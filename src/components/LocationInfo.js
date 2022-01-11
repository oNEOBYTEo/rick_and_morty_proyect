const LocationInfo = ({ info }) => {
  return (
    <header>
      <img
        alt="Rick And Morty Tittle"
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcb0yL8KdS3lxlB7w7kD6GfBTivnVVTfpiW0ZQTi6nvwWZIEpS5rU5iFeO_kJxGzEDnOaLx7iq0zM3FJc5e1gGqEGcaCkNotiOAl.png?r=d7f"
      />
      <h1>{info?.name}</h1>
      <div className="title_info">
        <h3>
          Type: <span>{info?.type}</span>
        </h3>
        <h3>
          Dimension: <span>{info?.dimension}</span>
        </h3>
        <h3>
          Residents: <span>{info?.residents?.length}</span>
        </h3>
      </div>
    </header>
  );
};

export default LocationInfo;
