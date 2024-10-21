

import { useEffect, useState } from "react"
import cloudyIcon from "../src/assets/cloudy.webp"
import drizzleIcon from "../src/assets/drizzle.jpg"
import hotIcon from  "../src/assets/hot.webp"
import rainIcon from "../src/assets/rain.webp"
import searchIcon from "../src/assets/serach.jpg"
import snowIcon from "../src/assets/snow.webp"
import thunderIcon from "../src/assets/thunder.webp"
import WeatherDetailes from "./WeatherDetail"

function App(){

  const [icon,setIcon] = useState(thunderIcon);
  const [temb,setTemb] = useState(0);
  // const [location,setLocation] = useState('Chennai');
  const [cuntry,setCuntry] = useState('IND');
  const [latitute,setlatitute] = useState(0);
  const [longitute,setLongiitute] = useState(0);
  const [wind,setWind] = useState(0)
  const [humidity,setHumidity] = useState(0)
  const [city,setCity] = useState("Chennai")
  const [cityNotFind,setCityNotFind] = useState(false)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState()


  const api_key = "02ddc5b8408e60d1b7f9166b99b083bc"

  const weatherIcon = {
    "01d":hotIcon,
    "01n":hotIcon,
    "02d":cloudyIcon,
    "02n":cloudyIcon,
    "03d":drizzleIcon,
    "03n":drizzleIcon,
    "04d":drizzleIcon,
    "04n":drizzleIcon,
    "09d":rainIcon,
    "09n":rainIcon,
    "10d":rainIcon,
    "10n":rainIcon,
    "11d":thunderIcon,
    "11n":thunderIcon,
    "13d":snowIcon,
    "13n":snowIcon,
  }

  const search = async ()=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    setLoading(true)

    try{
      const res = await fetch(URL)
      const data = await res.json()
      console.log(data);

      if(data.cod==="404"){
        console.log("City Not Found");
        setLoading(false)
        setCityNotFind(true)
        return;
      }

      setTemb(Math.floor(data.main.temp) )
      setCity(data.name)
      setCuntry(data.sys.country)
      setHumidity(data.main.humidity)
      setLongiitute(data.coord.lon)
      setlatitute(data.coord.lat)
      setWind(data.wind.speed)
      const weatherIconCode = data.weather[0].icon
      setIcon(weatherIcon[weatherIconCode] || snowIcon);
      setCityNotFind(false)
      
    }catch(err){
      console.log(err);
      setError("An Error occured while fetching data")
    }finally{
      setLoading(false)
    }

  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      search()
    }
  }

  useEffect(function (){
    search()
  },[]);

  return(
    <div className="container">
      <div className="input-container">
        <input type="text" placeholder="Search City" value={city} onChange={handleCity} onKeyDown={handleEnter}  className="cityInput"/>
        <div className="search-icon">
          <img src={searchIcon} alt="search" onClick={search} />
        </div>
      </div>

      {loading && <div className="loading-sms">Loading...</div>}
      {error && <div className="err-sms">{error}</div>}
      {cityNotFind && <div className="city-not-found">City Not Found 🤔</div>}

      { !loading && !cityNotFind && <WeatherDetailes icon={icon } temb={temb} locay={city} cunt={cuntry} lot={latitute} log={longitute} humidity={humidity} wind={wind} />}

      <div className="copyRight">
        <h3>Designed By <span>Itz-Me-SAM</span></h3>
      </div>
    </div>
  )
}


export default App;