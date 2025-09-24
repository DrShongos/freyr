import queryWeather from "./weatherData"
import weatherDisplay from "./weatherDisplay"
import statusBar from "./statusBar"

const clearElement = (element) => {
    let child = element.lastChild
    while (child != null) {
        element.removeChild(child)
        child = element.lastChild
    }
}

const updateContent = async (contentContainer, location) => {
    clearElement(contentContainer)
    statusBar(contentContainer, `Searching for information on the specified location. Please wait.`)
    try {
        const weatherData = await queryWeather(location)
        clearElement(contentContainer)
        weatherDisplay(contentContainer, weatherData)
    } catch (errorMessage) {
        clearElement(contentContainer)
        statusBar(contentContainer, errorMessage)
    }
}

export {
    clearElement,
    updateContent
}
