import windIcon from "../src/assets/wind.webp"
import humidityIcon from "../src/assets/humidi.png"


const WeatherDetailes = ({icon,temb,locay,cunt,lot,log,wind,humidity}) => {
    return (
        <>
          <div className="imges">
            <img src={icon} alt="sun"/>
          </div>
          <div className="temb">{temb} &deg;C </div>
          <div className="location">{locay}</div>
          <div className="country">{cunt}</div>
          <div className="cord">
            <div>
              <span className="lat">Latitute</span>
              <span>{lot}</span>
            </div>
            <div>
              <span className="log">Longitute</span>
              <span>{log}</span>
            </div>
          </div>
          <div className="data-container">
            <div className="element">
              <img src={windIcon} alt="wind" className="wind" />
            <div className="data">
              <div className="speed">{wind} Km/h</div>
              <div className="text">WindSpeed</div>
            </div>
            </div>
            <div className="element">
              <img src={humidityIcon} alt="wind" className="humini" />
            <div className="data2">
              <div className="percentage">{humidity
                }%</div>
              <div className="text">Humidity</div>
            </div>
            </div>
          </div>
        </>
    )
}

export default WeatherDetailes;