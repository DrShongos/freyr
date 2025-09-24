export default function statusBar(container, message) {
    const statusContainer = document.createElement(`div`)
    statusContainer.className = `statusContainer`
    container.appendChild(statusContainer)

    const statusMessage = document.createElement(`h1`)
    statusMessage.textContent = message
    statusContainer.appendChild(statusMessage)
}
