document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('flexCheckDefault')
    let next_button = document.getElementById('next_button')

    checkbox.addEventListener('change', function () {
        next_button.classList.toggle('disabled', !checkbox.checked)
    })
})

document.addEventListener('DOMContentLoaded', function () {
    let gender_button_1 = document.getElementById('Genero1')
    let gender_button_2 = document.getElementById('Genero2')
    let gender_button_3 = document.getElementById('Genero3')
    let gender_button_4 = document.getElementById('Genero4')
    let text_field = document.getElementById('outro')

    gender_button_1.addEventListener('click', function () {
        text_field.disabled = !gender_button_4.checked
        text_field.value = ''
    })

    gender_button_2.addEventListener('click', function () {
        text_field.disabled = !gender_button_4.checked
        text_field.value = ''
    })

    gender_button_3.addEventListener('click', function () {
        text_field.disabled = !gender_button_4.checked
        text_field.value = ''
    })

    gender_button_4.addEventListener('click', function () {
        text_field.disabled = !gender_button_4.checked
    })

    text_field.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            text_field.blur()
        }
    })
})