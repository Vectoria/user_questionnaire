const ctx = document.getElementById('barras');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Classificação do website',
            data: [12, 19, 3, 5, 2], /* mudar a estatistica aqui, metendo as vars*/
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

const ctx2 = document.getElementById('circular');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Masculino', 'Feminino', 'Não Binário', 'Outro'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5],   /* mudar a estatistica aqui, metendo as vars*/
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
});