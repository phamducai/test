import React from "react";
import Home from "./bai1/Bai1";
import Charts from "./bai2/Chart";

function App() {
  return (
    <div>
      <Home />
      {/* <Charts /> */}
    </div>
  );
}

export default App;
const arr1 = [
  { id: 1, phone: "0974380625", address: "phamducai" },
  { id: 2, phone: "0974380255", address: "phamducai" },
];
const arr3 = [
  { age: 28, sex: "male" },
  { age: 24, sex: "female" },
];
const arr2 = [
  { id: 1, name: "ai", age: 28 },
  { id: 2, name: "hai", age: 24 },
  { id: 3, name: "jai", age: 328 },
  { id: 4, name: "aai", age: 48 },
];

const arr4 = [
  { id: 1, phone: "0974380625", address: "phamducai", age: 28, sex: "male" },
  { id: 2, phone: "0974380255", address: "phamducai", age: 24, sex: "female" },
];
