const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
})

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const htmNode = entry.target //div container
    const image = htmNode.querySelector('img')
    const { src } = image.dataset
    image.src = src

    //unregister image
    observer.unobserve(htmNode)
}

export const registerImage = (image) => {
    observer.observe(image)
}
