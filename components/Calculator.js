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
    // loadData();
  }, []);

  return (
    <div>
      Calculator
      <select className="form-control" name="amt">
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 20 });
          }}
        >
          20 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 30 });
          }}
        >
          30 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 40 });
          }}
        >
          40 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 50 });
          }}
        >
          50 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 60 });
          }}
        >
          60 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 70 });
          }}
        >
          70 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 80 });
          }}
        >
          80 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "lac", val: 90 });
          }}
        >
          90 Lac
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 10000000 });
          }}
        >
          1 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 15000000 });
          }}
        >
          1.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 20000000 });
          }}
        >
          2 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 25000000 });
          }}
        >
          2.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 30000000 });
          }}
        >
          3 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 35000000 });
          }}
        >
          3.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 40000000 });
          }}
        >
          4 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 45000000 });
          }}
        >
          4.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 50000000 });
          }}
        >
          5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 55000000 });
          }}
        >
          5.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 60000000 });
          }}
        >
          6 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 65000000 });
          }}
        >
          6.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 70000000 });
          }}
        >
          7 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 75000000 });
          }}
        >
          7.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 80000000 });
          }}
        >
          8 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 85000000 });
          }}
        >
          8.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 90000000 });
          }}
        >
          9 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 95000000 });
          }}
        >
          9.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 100000000 });
          }}
        >
          10 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 150000000 });
          }}
        >
          10.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 110000000 });
          }}
        >
          11 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 115000000 });
          }}
        >
          11.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 120000000 });
          }}
        >
          12 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 125000000 });
          }}
        >
          12.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 130000000 });
          }}
        >
          13 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 135000000 });
          }}
        >
          13.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 140000000 });
          }}
        >
          14 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 145000000 });
          }}
        >
          14.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 150000000 });
          }}
        >
          15 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 155000000 });
          }}
        >
          15.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 160000000 });
          }}
        >
          16 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 165000000 });
          }}
        >
          16.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 170000000 });
          }}
        >
          17 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 175000000 });
          }}
        >
          17.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 180000000 });
          }}
        >
          18 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 185000000 });
          }}
        >
          18.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 190000000 });
          }}
        >
          19 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 195000000 });
          }}
        >
          19.5 Cr
        </option>
        <option
          onChange={() => {
            setAmt({ key: "cr", val: 200000000 });
          }}
        >
          20 Cr
        </option>
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
