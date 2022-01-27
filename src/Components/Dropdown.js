import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dropdown() {
  const [data, setdata] = useState([]);
  //   const [country, setCountry] = useState([]);
  //   const [state, setState] = useState([]);
  //   const [city, setCity] = useState([]);

  useEffect(() => {
    let URL_COUNTRY = "http://localhost:3001/";
    // let URL_STATE = "http://localhost:3001/state/";
    // let URL_CITY = "http://localhost:3001/city/";

    const requestOne = axios.get(URL_COUNTRY).then((resp)=>
    {
        console.log(resp.data)
    })
    // const requestTwo = axios.get(URL_STATE);
    // const requestThree = axios.get(URL_CITY);

    // axios.all([requestOne, requestTwo, requestThree]).then(
    //   axios.spread((...response) => {
    //     const responseOne = response[0];
    //     const responsetTwo = response[1];
    //     const responseThree = response[2];

    //     console.log(responseOne)
    //     console.log(responsetTwo)
    //     console.log(responseThree
    //         )
    //     // setdata([responseOne, responsetTwo, responseThree] == data);
    //   })
    // );

    // const URL_STATE = "http://localhost:3001/state/";
    // axios.get(URL_STATE).then((resp) => {
    //   console.log(resp);
    //   setState(resp.data);
    // });

    // const URL_CITY = "http://localhost:3001/city/";
    // axios.get(URL_CITY).then((resp) => {
    //   console.log(resp);
    //   setCity(resp==city);
    // });
  }, []);
  return (
    <div>
      <h1 className="text-center">Dropdown Dependent</h1>

      <select className="custom-select mt-4">
        <option value="1"> select country</option>
        {data.map((user) => (
          <option>{user.name}</option>
        ))}
      </select>

      <select className="custom-select mt-4">
        <option value="1"> select state</option>
        <option>One</option>
      </select>

      <select className="custom-select mt-4">
        <option value="1"> select city</option>
        <option>One</option>
      </select>
    </div>
  );
}
