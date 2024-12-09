import { useState, useMemo } from "react";

import "./App.css";


function App() {
  const [searchItem, setSearchIteam] = useState("");
  const items = useMemo(()=>[
    "Apple",
    "Banana",
    "Cherry",
    "Orange",
    "Date",
    "Fig",
    "Guava"
  ],[])

  const fiterItem = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(searchItem.toLowerCase()));
  }, [searchItem, items]);
  const handleChange = (event) => {
    setSearchIteam(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={searchItem}
        placeholder="Enter Item..."
        onChange={handleChange}
      />
      <ul>
        {fiterItem.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
   
    </>
  );
}

export default App;
