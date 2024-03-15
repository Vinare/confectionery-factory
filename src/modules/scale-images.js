export const scaleImages = () => {
    const images = document.querySelectorAll('img.scaling-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('-scale')
        })
    })
}