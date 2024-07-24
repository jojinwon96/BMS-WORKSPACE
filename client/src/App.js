import "./App.css";
import { useEffect, useState } from "react";
import { getTest } from "./apis/test";

function App() {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getTest();
      setList(data);
    } catch (error) {
      console.error("API 호출 오류:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Test List</h1>
      <ul>
        {list.map((item) => (
          <li key={item.idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
