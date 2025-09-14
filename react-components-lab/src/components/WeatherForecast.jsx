import WeatherData from "./WeatherData"
import WeatherIcon from "./WeatherIcon"


function WeatherForecast({forecast}) {
  return (
    <div className = "weather">
      <WeatherData data = {forecast}>
         <WeatherIcon icon = {forecast}/>
      </WeatherData>
    </div>
  )
}

export default WeatherForecast