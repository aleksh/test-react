import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import House from "./components/House";
import Loader from "./components/Loader";
import useFetchData from "./hooks/useFetchData";
import { FixedSizeList } from "react-window";
import { normalizeHouzeData } from "./utils";

const housesUrl = "https://wizard-world-api.herokuapp.com/houses";

const Row = ({ data, index, style }) => {
  const item = data[index];

  return (
    <div style={style}>
      <House
        key={item.id}
        name={item.name}
        animal={item.animal}
        founder={item.founder}
        startColor={item.startColor}
        endColor={item.endColor}
      />
    </div>
  );
};

function App() {
  const { data, loading, error } = useFetchData(housesUrl, normalizeHouzeData);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="app">
      {data && Array.isArray(data) && (
        <FixedSizeList
          height={640}
          width={500}
          itemData={data}
          itemSize={160}
          itemCount={data.length}
        >
          {Row}
        </FixedSizeList>
      )}
    </div>
  );
}

export default App;
