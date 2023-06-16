import React, { useState, useEffect } from 'react'
import './styleWeather.css'
import WeatherCard from './weatherCard'
const Temp = () => {

    const [input, setInput] = useState("pune");
    const [weatherInfo, setweatherInfo] = useState({});
    const fetchWeatherData = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=80a17f48b49c0fc2d527f4c75831a0b3`;
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data);
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const myWeatherInfo =  {temp, humidity, pressure, weathermood, name, speed, country, sunset};
            setweatherInfo(myWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchWeatherData();
    })

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type="search"
                        placeholder='search ...'
                        autoFocus
                        id="search"
                        className='searchterm'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className='searchButton'
                        onClick={fetchWeatherData}
                    >Search
                    </button>
                </div>
            </div>

            {/* our temp card  */}
            <WeatherCard tempInfo = {weatherInfo} />
        </>
    )
}

export default Temp
