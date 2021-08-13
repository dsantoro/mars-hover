import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import useFetch from "./util/useFetch";
import Gallery from "./components/Gallery";
import SelectCam from "./components/SelectCam";
import Header from "./components/Header";

function App() {
  const [date, setDate] = useState("2015-6-3");
  const [cam, setCam] = useState("khan");

  const [data, loading, error] = useFetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?`,
    {
      api_key: "8wa6CZkaThfQEfzCmjvufPDBaAJyiFoXz7InHeBh",
      earth_date: date,
      camera: cam,
      page: 1,
    }
  );

  return (
    <>
      <GlobalStyle />
      <Header title={<h1>Mars Rover</h1>} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <SelectCam onChange={(e) => setCam(e.target.value)} />
      {error ? (
        "error..."
      ) : data?.photos?.length === 0 ? (
        "no dates match with this criteria"
      ) : loading ? (
        "Loading"
      ) : (
        <Gallery data={data} />
      )}
    </>
  );
}

export default App;
