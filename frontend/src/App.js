import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/data');
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? data : 'Loading...'}
    </div>
  );
}

export default App;
