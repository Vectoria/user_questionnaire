// get all the keys in the local storage
let keys = Object.keys(localStorage)

// get the table body element
var table_body = document.getElementById('tabela');

// genders
let male = 0
let female = 0
let non_binary = 0
let other = 0

// website grading
let website1 = 0
let website2 = 0
let website3 = 0
let website4 = 0
let website5 = 0

// go through all the keys
keys.forEach(function (key) {
    let jsonString = localStorage.getItem(key)

    // Parse the string into a JavaScript object
    let data = JSON.parse(jsonString)

    // Create a new table row
    let newRow = document.createElement('tr')

    // Iterate over the keys of the data and add table cells for each property
    for (var propertyKey in data) {
        if (data.hasOwnProperty(propertyKey)) {
            var newCell = document.createElement('td')
            newCell.textContent = data[propertyKey]
            newRow.appendChild(newCell)
        }
    }

    // Append the new row to the table body
    table_body.appendChild(newRow)

    // check if there's a "gender" property
    if (data && data.gender) {
        // extract each the gender
        let gender = data.gender
        switch (gender) {
            case "Masculino":
                male++
                break
            case "Feminino":
                female++
                break
            case "Não Binário":
                non_binary++
                break
            case "Outro":
                other++
                break
        }
    }

    // check if there's a "class_website" property
    if (data && data.class_website) {
        // extract each the gender
        let class_website = data.class_website
        switch (class_website) {
            case "1":
                website1++
                break
            case "2":
                website2++
                break
            case "3":
                website3++
                break
            case "4":
                website4++
                break
            case "5":
                website5++
        }
    }

})

const ctx = document.getElementById('barras')

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Classificação do website',
            data: [website1, website2, website3, website4, website5],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('circular')

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Masculino', 'Feminino', 'Não Binário', 'Outro'],
        datasets: [{
            label: '',
            data: [male, female, non_binary, other],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Género dos que fizeram o formulário'
            }
        }
    }
})