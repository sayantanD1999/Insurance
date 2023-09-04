import React, { useEffect, useState } from "react";

function Calculator() {
  const [age, setAge] = useState(18);
  const [cover, setCover] = useState(30);
  const [amt, setAmt] = useState({
    key: "lac",
    val: 1,
  });
  const [gender, setGender] = useState("Male");
  const [amtArr, setAmtArr] = useState([]);
  const loadData = () => {
    const arr = [];
    for (let i = 20; i < 40; i + 5) {
      arr.push(
        <option
          onChange={() => {
            setAmt({ key: "Lac", val: i });
          }}
          key={i}
          value={i}
        >
          {i} Lac
        </option>
      );
    }
    for (let i = 1; i < 21; i + 0.5) {
      arr.push(
        <option
          onChange={() => {
            setAmt({ key: "Cr", val: i });
          }}
          key={i}
          value={i}
        >
          {i} Cr
        </option>
      );
    }
    setAmtArr(arr);
    console.log(arr);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      Calculator
      <select className="form-control" name="amt">
        {amtArr}
      </select>
      <select className="form-control" name="age">
        {(() => {
          const arr = [];
          for (let i = 18; i <= 66; i++) {
            arr.push(
              <option onChange={() => setAge(i)} key={i} value={i}>
                {i} Yrs
              </option>
            );
          }
          return arr;
        })()}
      </select>
      <select className="form-control" name="gender">
        <option onChange={(e) => setGender(e.target.value)} value="Male">
          Male
        </option>
        <option onChange={(e) => setGender(e.target.value)} value="Female">
          Female
        </option>
      </select>
      <select className="form-control" name="cover">
        {(() => {
          const arr = [];
          for (let i = 30; i <= 85; i++) {
            arr.push(
              <option onChange={() => setCover(i)} key={i} value={i}>
                {i} Yrs
              </option>
            );
          }
          return arr;
        })()}
      </select>
    </div>
  );
}

export default Calculator;
