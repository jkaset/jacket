let weather = []

export const getWeather = (zip) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${keys.weatherKey}`)
  .then(response => response.json())
  .then(parsedResponse => {
    weather = parsedResponse
  })
}

