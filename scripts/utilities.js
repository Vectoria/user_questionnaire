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

    if (!nome1 || !sobrenome2 || !idade || !gender || !rock_gostar || !metal_gostar || !ouvir_semana || !bandas_rock_metal || !relacao_g || !conversar || !estetica || !novidades || !pesquisa || !bugs_website || !parecido || !melhorar || !usaria || !adjetivo1 || !adjetivo2 || !adjetivo3 || !adjetivo4 || !class_caracterizacao || !class_tarefas || !class_global || !class_website || !class_questionario) {
        alert('Please fill in all the required fields.')
        return
    }
    storeValuesInLocalStorage()
}

function storeValuesInLocalStorage() {
    let formData = {
        nome1: document.getElementById('nome1').value,
        sobrenome2: document.getElementById('sobrenome2').value,
        idade: document.getElementById('idade').value,
        gender: "",
        rock_gostar: "",
        metal_gostar: "",
        ouvir_semana: "",
        sub_rock: [],
        sub_metal: [],
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
        adjetivo1: "",
        adjetivo2: "",
        adjetivo3: "",
        adjetivo4: "",
        class_caracterizacao: "",
        class_tarefas: "",
        class_global: "",
        class_website: "",
        class_questionario: ""
    }

    let genderRadios = document.getElementsByName("gender")
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            gender = genderRadios[i].nextElementSibling.textContent.trim()
            break
        }
    }

    let rockGostarRadios = document.getElementsByName("rock_gostar")
    for (let i = 0; i < rockGostarRadios.length; i++) {
        if (rockGostarRadios[i].checked) {
            rock_gostar = rockGostarRadios[i].value
            break
        }
    }

    let metalGostarRadios = document.getElementsByName("metal-gostar")
    for (let i = 0; i < metalGostarRadios.length; i++) {
        if (metalGostarRadios[i].checked) {
            metal_gostar = metalGostarRadios[i].value
            break
        }
    }

    let ouvirSemanaRadios = document.getElementsByName("ouvir_semana")
    for (let i = 0; i < ouvirSemanaRadios.length; i++) {
        if (ouvirSemanaRadios[i].checked) {
            ouvir_semana = ouvirSemanaRadios[i].value
            break
        }
    }

    let rockGCheckboxes = document.getElementsByName("rockG")
    for (let i = 0; i < rockGCheckboxes.length; i++) {
        if (rockGCheckboxes[i].checked) {
            sub_rock.push(rockGCheckboxes[i].value)
        }
    }

    let metalGCheckboxes = document.getElementsByName("metalG")
    for (let i = 0; i < metalGCheckboxes.length; i++) {
        if (metalGCheckboxes[i].checked) {
            sub_metal.push(metalGCheckboxes[i].value)
        }
    }

    let adjetivo1Radios = document.getElementsByName("adjetivo1")
    for (let i = 0; i < adjetivo1Radios.length; i++) {
        if (adjetivo1Radios[i].checked) {
            adjetivo1 = adjetivo1Radios[i].value
            break
        }
    }

    let adjetivo2Radios = document.getElementsByName("adjetivo2")
    for (let i = 0; i < adjetivo2Radios.length; i++) {
        if (adjetivo2Radios[i].checked) {
            adjetivo2 = adjetivo2Radios[i].value
            break
        }
    }

    let adjetivo3Radios = document.getElementsByName("adjetivo3")
    for (let i = 0; i < adjetivo3Radios.length; i++) {
        if (adjetivo3Radios[i].checked) {
            adjetivo1 = adjetivo3Radios[i].value
            break
        }
    }

    let adjetivo4Radios = document.getElementsByName("adjetivo4")
    for (let i = 0; i < adjetivo4Radios.length; i++) {
        if (adjetivo4Radios[i].checked) {
            adjetivo4 = adjetivo4Radios[i].value
            break
        }
    }

    let classCaracterizacaoRadios = document.getElementsByName("class_caracterizacao")
    for (let i = 0; i < classCaracterizacaoRadios.length; i++) {
        if (classCaracterizacaoRadios[i].checked) {
            class_caracterizacao = classCaracterizacaoRadios[i].value
            break
        }
    }

    let classTarefasRadios = document.getElementsByName("class_tarefas")
    for (let i = 0; i < classTarefasRadios.length; i++) {
        if (classTarefasRadios[i].checked) {
            class_tarefas = classTarefasRadios[i].value
            break
        }
    }

    let classGlobalRadios = document.getElementsByName("class_global")
    for (let i = 0; i < classGlobalRadios.length; i++) {
        if (classGlobalRadios[i].checked) {
            class_global = classGlobalRadios[i].value
            break
        }
    }

    let classWebsiteRadios = document.getElementsByName("class_website")
    for (let i = 0; i < classWebsiteRadios.length; i++) {
        if (classWebsiteRadios[i].checked) {
            class_website = classWebsiteRadios[i].value
            break
        }
    }

    let classQuestionarioRadios = document.getElementsByName("class_questionario")
    for (let i = 0; i < classQuestionarioRadios.length; i++) {
        if (classQuestionarioRadios[i].checked) {
            class_questionario = classQuestionarioRadios[i].value
            break
        }
    }

    let timestamp = new Date().getTime()

    localStorage.setItem(timestamp, JSON.stringify(formData))

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
