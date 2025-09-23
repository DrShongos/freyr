const currentTemperature = (container, data) => {
    const currentContainer = document.createElement(`div`)
    currentContainer.id = `currentTemperature`
    container.appendChild(currentContainer)

    const temperatureDisplay = document.createElement(`h1`)
    temperatureDisplay.id = `temperatureDisplay`
    temperatureDisplay.textContent = `${data.currentConditions.temp}C`
    currentContainer.appendChild(temperatureDisplay)

    const conditionDisplay = document.createElement(`h2`)
    conditionDisplay.id = `conditionDisplay`
    conditionDisplay.textContent = `${data.currentConditions.conditions}`
    currentContainer.appendChild(conditionDisplay)
}

const conditionContainer = (container, label, info) => {
    const newContainer = document.createElement('div')
    newContainer.className = `conditionContainer`
    container.appendChild(newContainer)

    const labelDisplay = document.createElement(`h2`)
    labelDisplay.textContent = `${label}`
    newContainer.appendChild(labelDisplay)

    const infoDisplay = document.createElement(`h1`)
    infoDisplay.textContent = `${info}`
    newContainer.appendChild(infoDisplay)
}

const moreConditions = (container, data) => {
    const currentContainer = document.createElement(`div`)
    currentContainer.id = `moreConditions`
    container.appendChild(currentContainer)

    // Wind
    conditionContainer(currentContainer, `Wind`, `${data.currentConditions.windspeed}km/h`)

    // Humidity
    conditionContainer(currentContainer, `Humidity`, `${data.currentConditions.humidity}%`)

    // UV Index
    conditionContainer(currentContainer, `UV Index`, `${data.currentConditions.uvindex}`)

    // Rain chance
    conditionContainer(currentContainer, `Chance of rain`, `${data.currentConditions.precipprob}%`)

    // Cloudiness
    conditionContainer(currentContainer, `Cloudiness`, `${data.currentConditions.cloudcover}%`)

    // Visibility
    conditionContainer(currentContainer, `Visibility`, `${data.currentConditions.visibility}km`)

    // Pressure
    conditionContainer(currentContainer, `Pressure`, `${data.currentConditions.pressure}hPa`)

    // Sunrise
    conditionContainer(currentContainer, `Sunrise`, `${data.currentConditions.sunrise}`)

    // Sunset
    conditionContainer(currentContainer, `Sunset`, `${data.currentConditions.sunset}`)
}

export default function weatherDisplay(container, weatherData) {
    const displayContainer = document.createElement(`div`)
    displayContainer.id = `weatherContainer`
    container.appendChild(displayContainer)

    const cityDisplay = document.createElement(`h1`)
    cityDisplay.id = `cityDisplay`
    cityDisplay.textContent = `${weatherData.resolvedAddress}`
    displayContainer.appendChild(cityDisplay)

    const currentTime = document.createElement(`h2`)
    currentTime.id = `currentTime`
    currentTime.textContent = `${weatherData.currentConditions.datetime}`
    displayContainer.appendChild(currentTime)

    const detailContainer = document.createElement(`div`)
    detailContainer.id = `detailContainer`
    displayContainer.appendChild(detailContainer)

    currentTemperature(detailContainer, weatherData)
    moreConditions(detailContainer, weatherData)

}
