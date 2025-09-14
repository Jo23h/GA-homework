
function WeatherData({forecast}) {
  return (
    <div>
      <img 
        src = {forecast.img}
        alt = {forecast.imgAlt} 
      />
    </div>
  )
}

export default WeatherData