// ***Lazy-loading para imagenes***
// 1. Generar template en Html 
// 2. Consultar API y conectar con el DOM 
// 3. Agregar interaccion 
// 4. Agregar lazy load con intesection observer

import { registerImage } from './lazy'

const imagesContainer = document.querySelector('.images')
const loadOneImgButton = document.querySelector('.load-image')
const cleanAllImages = document.querySelector('.clean-all')
const isLazy = 'loading' in HTMLImageElement.prototype // Check if browser supports lazy-loading

const generateRandom = () => {
    const num = Math.floor(Math.random() * 100)
    return num
}

const createImageNode = () => {
    const imageWrapper = document.createElement('div')
    const image = document.createElement('img')
    imageWrapper.className = 'p-4'
    image.className = 'mx-auto rounded-md'
    image.width = '320'
    image.style.minHeight = '200px'
    image.style.background = "#d1d5db url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=') no-repeat right top"
    if (isLazy) {
        image.loading = 'lazy'
        image.src = `https://source.unsplash.com/random/${generateRandom()}`
    } else image.dataset.src = `https://source.unsplash.com/random/${generateRandom()}`

    imageWrapper.append(image)

    return imageWrapper
}

const addImage = () => {
    const newImage = createImageNode()
    imagesContainer.append(newImage)
    !isLazy && registerImage(newImage)
}

const cleanAll = () => imagesContainer.innerHTML = ''

addImage()

loadOneImgButton.addEventListener('click', addImage)
cleanAllImages.addEventListener('click', cleanAll)