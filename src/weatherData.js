const API_KEY = `GRHV6HFT2TVQ4ZGQF5HEXWY8H`
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`

// Queries the VisualCrossing API to retrieve weather data for the specified location.
// Throws an error message on failure.
const queryWeather = async (location) => {
    try {
        const response =
            await fetch(`${BASE_URL}${location}/today/next7days?unitGroup=metric&key=${API_KEY}&contentType=json`)

        if (response.status == 404 || response.status == 400) {
            throw 'Specified city could not be found'
        } else if (response.status != 200)
            throw 'Unexpected API error'

        const response_json = await response.json()

        return response_json
    } catch (e) {
        console.log(`Query failed: ${e}`)
        throw e
    }
}

export default queryWeather
