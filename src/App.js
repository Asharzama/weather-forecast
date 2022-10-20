import { createContext, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
export const placeContext = createContext("");

function App() {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <placeContext.Provider value={{ city, setCity }}>
        <Navbar />
        <Body />
      </placeContext.Provider>
    </div>
  );
}

export default App;
