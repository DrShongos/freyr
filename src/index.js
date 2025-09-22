import "./style.css"

import queryWeather from './weatherData.js'

import weatherDisplay from "./weatherDisplay.js"

const contentContainer = document.querySelector(`#content`)

var weatherData = await queryWeather('warsaw')
weatherDisplay(contentContainer, weatherData)
console.log(weatherData)
