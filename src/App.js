import "./styles.css";
import AxiosRequest from "./components/AxiosRequest";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [info, setInfo] = AxiosRequest();

  return (
    <div className="App">
      <LocationInfo info={info} />
      <SearchBox setLocationId={setInfo} />
      <section>
        {info?.residents?.map((res) => (
          <ResidentList info={`${res}`} key={`${res}`} />
        ))}
      </section>
    </div>
  );
}
