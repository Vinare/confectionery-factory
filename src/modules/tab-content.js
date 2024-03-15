export const tabContent = () => {
    const buttons = document.querySelectorAll('button[data-tab-btn]')

    const changeTab = (activeIndex) => {
        const content = document.querySelectorAll(`[data-tab-content]`)
  
        buttons.forEach((button, idx) => {
            if (activeIndex === idx) {
                button.classList.add('active')
            } else {
                button.classList.remove('active')
            }
        })

        content.forEach(c => {
            if (+c.dataset.tabContent === activeIndex) {
                c.classList.remove('-hide')
            } else {
                c.classList.add('-hide')
            }
        })
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const index = +button.dataset.tabBtn
            changeTab(index)
        })
    })

    // для отметки кнопок табов устанавливаем data аттрибуты с индексом по порядку от нуля 
    // data-tab-btn="0"
    // data-tab-btn="1"

    // для отметки сменяемого контента устанавливаем data аттрибуты с индексом соответствующего таба
    // data-tab-content="0"
    // data-tab-content="1"

    // для скрытия лишнего контента даем класс -hide
}