import React, { useState, useEffect } from "react";
import main from "./styles/main.module.scss";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import Complex from "./utils/Complex";
 
// const data = [
//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400,
//     "amt": 2400
//   },
//   {
//     "name": "Page B",
//     "uv": 3000,
//     "pv": 1398,
//     "amt": 2210
//   },
//   {
//     "name": "Page C",
//     "uv": 2000,
//     "pv": 9800,
//     "amt": 2290
//   },
//   {
//     "name": "Page D",
//     "uv": 2780,
//     "pv": 3908,
//     "amt": 2000
//   },
//   {
//     "name": "Page E",
//     "uv": 1890,
//     "pv": 4800,
//     "amt": 2181
//   },
//   {
//     "name": "Page F",
//     "uv": 2390,
//     "pv": 3800,
//     "amt": 2500
//   },
//   {
//     "name": "Page G",
//     "uv": 3490,
//     "pv": 4300,
//     "amt": 2100
//   }
// ];

const App = () => {
  const h = 0.05;
  const [data, setData] = useState([]);
  const xMin = 1;
  const xMax = 3;

  const findComplexFunction = () => {
    const arrayValues = Complex.task(xMin, xMax, h); 
    console.log(arrayValues);
    setData(arrayValues);
  };

  useEffect(() => {
    findComplexFunction();
  }, []);

  // const setHValue = (e) => {
  //   setH(e.target.value-0);
  // }

  return (
    <div className={main.wrapper}>
      <div className={main.content}>
        {/* <div className={main.field}>
          <label>h:</label>
          <input type="number" value={h} onChange={setHValue} />
        </div>     */}
      </div>
      <div className={main.chart}>
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="re" stroke="#8884d8" />
          <Line type="monotone" dataKey="im" stroke="#82ca9d" />
        </LineChart>   
      </div> 
    </div>
  )
}

export default App;
