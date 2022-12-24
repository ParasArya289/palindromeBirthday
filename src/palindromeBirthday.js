import { useState } from "react";

let PalindromBirthday = () => {
  let [inpDate, setInpDate] = useState("");
  let [out, setOut] = useState("");

  let dateArr = inpDate.split("-");
  let date = {
    day: dateArr[2],
    month: dateArr[1],
    year: dateArr[0],
  };

  let checkFormat = () => {
    let mmddyyyy = date.month + date.day + date.year;
    let ddmmyyyy = date.day + date.month + date.year;
    let yyyymmdd = date.year + date.month + date.day;
    let ddmmyy = date.day + date.month + date.year.slice(-2);
    let mmddyy = date.month + date.day + date.year.slice(-2);
    let yyddmm = date.year.slice(-2) + date.day + date.month;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  };

  let reverseStringAll = (allStr) => {
    let revAll = [];
    for (let i = 0; i < allStr.length; i++) {
      revAll.push(allStr[i].split("").reverse().join(""));
    }
    console.log(revAll);
    return revAll;
  };

  let isPalindrome = () => {
    let dateList = checkFormat();
    let revAllstr = reverseStringAll(dateList);
    console.log(dateList);

    let flag = 0;

    for (let i = 0; i < dateList.length; i++) {
      for (let j = 0; j < revAllstr.length; j++) {
        if (revAllstr[j] === dateList[i]) {
          flag = 1;
          break;
        }
      }
    }
    if (flag) {
      setOut("Your birthday is a palindrome 🔥");
    } else {
      setOut("Your birthday is not a palindrome 🙁");
    }
  };

  return (
    <div style={{ width: "50%", margin: "3rem auto", padding: "1rem 1rem" }}>
      <h1 style={{ color: "grey" }}>
        <span style={{ color: "tomato" }}>Palindrome</span> Birthday
      </h1>
      <input
        style={{
          borderColor: "tomato",
          color: "grey",
          display: "block",
          margin: "1rem auto",
          width: "40%",
          height: "2rem",
          borderRadius: "20px 2px",
          padding: "1rem",
        }}
        type="date"
        onChange={(e) => setInpDate(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "tomato",
          padding: "0.6rem 2rem",
          border: "none",
          borderRadius: "6px",
          color: "white",
        }}
        onClick={isPalindrome}
        disabled={inpDate === "" ? true : false}
      >
        Check
      </button>
      <h3 style={{ color: "grey" }}>{out}</h3>
    </div>
  );
};
export default PalindromBirthday;
