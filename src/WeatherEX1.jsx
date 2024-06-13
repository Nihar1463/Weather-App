import React from "react";
import "./WeatherEX1.css";
import { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { TbTemperatureSun } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";

import { RiCelsiusLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

export default function WeatherEX1() {
  let [city, setCity] = useState("");
  let [wdetails, setWdetails] = useState();
  let currtime = new Date().toLocaleTimeString();

  let getData = (event) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
    )
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod == "404") {
          setWdetails(undefined);
        } else {
          setWdetails(finalRes);
        }
        console.log(finalRes);
      });
    event.preventDefault();
    setCity("");
    document.querySelector(".show").style.display = "block";
  };
  return (
    <div className="main1">
      <form onSubmit={getData} className="formm">
        <input
          type="text"
          className="inputt"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter the city"
        />
        <button className="btnn">Submit</button>
      </form>
      <div className="show">
        {wdetails !== undefined ? (
          <>
          <div style={{marginBottom:"2vw", fontFamily: "Courier New", fontWeight:"bold", backgroundColor:"rgba(235, 25, 25, 0.210)", borderRadius:"10px", textAlign:"center"}}><span style={{  fontSize:"2vw"}}>🌤️ Weather APP</span><span style={{  fontSize:"2vw"}}> 🌤️ </span></div>
            <div className="cn1">
              <div className="City_name">
                <div className="icon_loc">
                  <ImLocation2 />
                </div>

                <h1>{wdetails.name}</h1>
              </div>
              <div className="time">
                <p>{currtime}</p>
              </div>
            </div>
            <div className="bx2">
              <div className="temp1">
                <p className="icon_temp">
                  <TbTemperatureSun />
                </p>
                {/* <img src={I} alt="" className="icon_loc" /> */}
                <h1>{wdetails.main.temp}°C</h1>
                {/* <p className="icon_temp">
                  <RiCelsiusLine />
                  
                </p> */}
              </div>
              <div className="temp2">
                <h1>{wdetails.weather[0].description}</h1>
              </div>

              {/* <h1>City Name</h1> */}
            </div>
            <div className="bx3">
              <div className="cont1">
                <div className="temp_min">
                  <div className="min_icn">
                    <p>Min Temp.</p>
                  </div>
                  <FaTemperatureArrowDown />
                  {wdetails.main.temp_min}°C
                </div>
                <div className="temp_min">
                <div className="min_icn">
                    <p>Max Temp.</p>  
                  </div>
                  <FaTemperatureArrowUp />
                  {wdetails.main.temp_max}°C
                </div>
              </div>
              <div className="cont2">
                {/* <h1>Humidity:{wdetails.main.humidity}%</h1> */}
                <h1>
                  Feels Like:
                  <br />
                  {wdetails.main.feels_like}°C
                </h1>
              </div>
            </div>
            <div className="bx4">
              <div className="card">
                <h1>Humidity</h1>
                <div className="icnn">
                  <div className="a12">
                    <WiHumidity />
                  </div>
                </div>
                <div className="info">
                  <h1>{wdetails.main.humidity}</h1>
                </div>
              </div>
              <div className="card">
                <h1>Pressure</h1>
                <div className="icnn">
                  <div className="a12">
                    <WiStrongWind />
                  </div>
                </div>
                <div className="info">
                  <h1>{wdetails.main.pressure} Pa</h1>
                </div>
              </div>
              <div className="card">
                <h1>Wind</h1>
                <div className="icnn">
                  <div className="a12">
                    <FaWind />
                  </div>
                </div>
                <div className="info">
                  <h1>{wdetails.wind.speed}Km/h</h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          "No Data"
        )}
      </div>
    </div>
  );
}
