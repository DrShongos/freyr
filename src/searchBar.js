import queryWeather from "./weatherData"
import weatherDisplay from "./weatherDisplay"
import { clearElement } from "./util"

export default function searchBar(contentContainer) {
    const searchForm = document.querySelector('#search-form')

    const searchButton = searchForm.querySelector('#search-button')
    const searchBar = searchForm.querySelector('#search-bar')

    searchButton.addEventListener('click', async (e) => {
        // Prevent submitting from causing page reloading.
        e.preventDefault()

        if (searchBar.value.length < 1) return

        clearElement(contentContainer)
        const weatherData = await queryWeather(searchBar.value)
        weatherDisplay(contentContainer, weatherData)
        searchBar.value = ''
    })
}
