import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [data, setUserData] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:3001/users/";
    axios.get(URL).then((response) => {
      setUserData(response.data);
      console.log(response);
    });
  }, []);
  const handleOnClick=()=> {
    console.log("id");
  };

  return (
    <>
      <div className="container">
        <select className="custom-select mt-4 ">
          <option selected>Select User Name</option>
          {data.map((user) => (
            <option onClick={handleOnClick}>
              {user.uname}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
