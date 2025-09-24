import { updateContent } from "./util"

export default function searchBar(contentContainer) {
    const searchForm = document.querySelector('#search-form')

    const searchButton = searchForm.querySelector('#search-button')
    const searchBar = searchForm.querySelector('#search-bar')

    searchButton.addEventListener('click', async (e) => {
        // Prevent submitting from causing page reloading.
        e.preventDefault()

        if (searchBar.value.length < 1) return

        await updateContent(contentContainer, searchBar.value)

        searchBar.value = ''
    })
}
