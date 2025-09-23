const clearElement = (element) => {
    let child = element.lastChild
    while (child != null) {
        element.removeChild(child)
        child = element.lastChild
    }
}

export {
    clearElement
}
