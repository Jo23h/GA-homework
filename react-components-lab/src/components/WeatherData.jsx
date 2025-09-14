
function WeatherData({data, children}) {
  return (
    <div>
      <h2>{data.day}</h2>
      {children}
      <p><span>conditions: </span>{data.conditions}</p>
      <p><span>time: </span>{data.time}</p>
    </div>
  )
}

export default WeatherData