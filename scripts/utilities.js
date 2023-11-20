function validateForm() {
    let nome1 = document.getElementById('nome1').value
    let sobrenome2 = document.getElementById('sobrenome2').value
    let idade = document.getElementById('idade').value
    let gender = document.getElementsByName('gender').value
    let rock_gostar = document.getElementsByName('rock_gostar').value
    let metal_gostar = document.getElementsByName('metal-gostar').value
    let ouvir_semana = document.getElementsByName('ouvir_semana').value
    let sub_rock = document.getElementsByName('rockG').value
    let sub_metal = document.getElementsByName('metalG').value
    let bandas_rock_metal = document.getElementById('Bandas_Rock_Metal').value
    let relacao_g = document.getElementById('relacao_g').value
    let conversar = document.getElementById('conversar').value
    let estetica = document.getElementById('estetica').value
    let novidades = document.getElementById('novidades').value
    let pesquisa = document.getElementById('pesquisa').value
    let bugs_website = document.getElementById('bugs_website').value
    let parecido = document.getElementById('parecido').value
    let melhorar = document.getElementById('melhorar').value
    let usaria = document.getElementById('usaria').value
    let adjetivo1 = document.getElementsByName('adjetivo1').value
    let adjetivo2 = document.getElementsByName('adjetivo2').value
    let adjetivo3 = document.getElementsByName('adjetivo3').value
    let adjetivo4 = document.getElementsByName('adjetivo4').value
    let class_caracterizacao = document.getElementsByName('class_caracterizacao').value
    let class_tarefas = document.getElementsByName('class_tarefas').value
    let class_global = document.getElementsByName('class_global').value
    let class_website = document.getElementsByName('class_website').value
    let class_questionario = document.getElementsByName('class_questionario').value

    if (!nome1 || !sobrenome2 || !idade || !gender || !rock_gostar || !metal_gostar || !ouvir_semana || !sub_rock || !sub_metal || !bandas_rock_metal || !relacao_g || !conversar || !estetica || !novidades || !pesquisa || !bugs_website || !parecido || !melhorar || !usaria || !adjetivo1 || !adjetivo2 || !adjetivo3 || !adjetivo4 || !class_caracterizacao || !class_tarefas || !class_global || !class_website || !class_questionario) {
        alert('Please fill in all the required fields.')
        return;
    }
    storeValuesInLocalStorage();
}

function storeValuesInLocalStorage() {
    // Access form elements and store their values in local storage
    let formData = {
        nome1: document.getElementById('nome1').value,
        sobrenome2: document.getElementById('sobrenome2').value,
        idade: document.getElementById('idade').value,
        gender: document.getElementsByName('gender').value,
        rock_gostar: document.getElementsByName('rock_gostar').value,
        metal_gostar: document.getElementsByName('metal-gostar').value,
        ouvir_semana: document.getElementsByName('ouvir_semana').value,
        sub_rock: document.getElementsByName('rockG').value,
        sub_metal: document.getElementsByName('metalG').value,
        bandas_rock_metal: document.getElementById('Bandas_Rock_Metal').value,
        relacao_g: document.getElementById('relacao_g').value,
        conversar: document.getElementById('conversar').value,
        estetica: document.getElementById('estetica').value,
        novidades: document.getElementById('novidades').value,
        pesquisa: document.getElementById('pesquisa').value,
        bugs_website: document.getElementById('bugs_website').value,
        parecido: document.getElementById('parecido').value,
        melhorar: document.getElementById('melhorar').value,
        usaria: document.getElementById('usaria').value,
        adjetivo1: document.getElementsByName('adjetivo1').value,
        adjetivo2: document.getElementsByName('adjetivo2').value,
        adjetivo3: document.getElementsByName('adjetivo3').value,
        adjetivo4: document.getElementsByName('adjetivo4').value,
        class_caracterizacao: document.getElementsByName('class_caracterizacao').value,
        class_tarefas: document.getElementsByName('class_tarefas').value,
        class_global: document.getElementsByName('class_global').value,
        class_website: document.getElementsByName('class_website').value,
        class_questionario: document.getElementsByName('class_questionario').value
    }

    let timestamp = new Date().getTime(); // Generate a timestamp for a unique key

    // Store data in local storage
    localStorage.setItem(timestamp, JSON.stringify(formData))

    // Optionally, you can clear the form after storing values
    document.getElementById('questionnaireForm').reset()

    alert('Form data has been successfully stored in local storage.')
}

function convertLocalStorageToObject() {
    const localStorageData = {}
    // Loop through all items in LocalStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        // Parse the value if it's valid JSON
        try {
            localStorageData[key] = JSON.parse(value)
        } catch (e) {
            localStorageData[key] = value
        }
    }
    return localStorageData
}

function exportLocalStorageToJSON(filename) {
    // Convert the data to JSON
    const jsonData = JSON.stringify(convertLocalStorageToObject(), null, 2);
    // Create a Blob containing the JSON data
    const blob = new Blob([jsonData], { type: "application/json" });
    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename || "localStorageData.json";
    // Trigger a click event to download the file
    link.click();
}

function importLocalStorageFromJSON(inputElement) {
    const file = inputElement.files[0];
    if (!file) {
        alert("Please select a JSON file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        try {
            const jsonString = event.target.result;
            const data = JSON.parse(jsonString);

            // Clear existing LocalStorage data
            localStorage.clear();

            // Restore data from the JSON
            for (const key in data) {
                const value = data[key];
                if (typeof value === 'object' && value !== null) {
                    // If the value is an object, store it as a string
                    localStorage.setItem(key, JSON.stringify(value));
                } else {
                    // Otherwise, store it as-is
                    localStorage.setItem(key, value);
                }
            }
            alert("LocalStorage data restored successfully.");
        } catch (error) {
            alert("Error restoring LocalStorage data. Make sure the selected file is a valid JSON file.");
        }
    };

    reader.readAsText(file);
}
