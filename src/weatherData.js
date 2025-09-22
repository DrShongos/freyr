const API_KEY = `GRHV6HFT2TVQ4ZGQF5HEXWY8H`
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`

const queryWeather = async (location) => {
    try {
        const response =
            await fetch(`${BASE_URL}${location}?unitGroup=metric&key=${API_KEY}&contentType=json`)

        const response_json = await response.json()

        return response_json
    } catch (e) {
        return null
    }
}

export default queryWeather
