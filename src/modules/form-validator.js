export const formValidator = () => {
    const forms = document.querySelectorAll('form')

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[type=text], input[type=email], input[type=tel]');
        const checkbox = form.querySelector('input[type=checkbox]')

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('-invalid')
            })
        })

        checkbox.addEventListener('change', () => {
            checkbox.classList.remove('-invalid')
        })

        form.addEventListener('submit', (e) => {
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false

                    input.classList.add('-invalid')
                }
            })

            if (!checkbox.checked) {
                isValid = false
                checkbox.classList.add('-invalid')
            }
            
            if (!isValid) {
                e.preventDefault()
            }
        })
    })
}