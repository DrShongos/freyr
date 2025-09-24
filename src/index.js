import "./style.css"

import queryWeather from './weatherData.js'

import searchBar from './searchBar.js'
import weatherDisplay from "./weatherDisplay.js"

import { updateContent } from "./util.js"

const contentContainer = document.querySelector(`#content`)

searchBar(contentContainer)

await updateContent(contentContainer, `Warsaw`)
