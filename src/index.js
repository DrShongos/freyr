import "./style.css"

import queryWeather from './weatherData.js'

import searchBar from './searchBar.js'
import weatherDisplay from "./weatherDisplay.js"

const contentContainer = document.querySelector(`#content`)

searchBar(contentContainer)

var weatherData = await queryWeather('warsaw')
weatherDisplay(contentContainer, weatherData)
console.log(weatherData)
