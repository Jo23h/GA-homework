
function WeatherForecast({forecast}) {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <p><span>conditions: </span>{forecast.conditions}</p>
      <p><span>time: </span> {forecast.time}</p>
    </div>
  )
}

export default WeatherForecast