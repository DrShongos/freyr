export default async function weatherDisplay(container, weatherData) {
    const displayContainer = document.createElement(`div`)
    displayContainer.id = `weatherContainer`
    container.appendChild(displayContainer)

    const temperatureDisplay = document.createElement(`h2`)
    temperatureDisplay.id = `weatherDisplay`
    temperatureDisplay.innerText = `${weatherData.currentConditions.temp}C`
    displayContainer.appendChild(temperatureDisplay)
}
