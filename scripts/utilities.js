function validateForm() {
    let nome1 = document.getElementById('nome1').value
    let sobrenome2 = document.getElementById('sobrenome2').value
    let idade = document.getElementById('idade').value
    let genero1 = document.getElementById('Genero1').value
    let genero2 = document.getElementById('Genero2').value
    let genero3 = document.getElementById('Genero3').value
    let genero4 = document.getElementById('Genero4').value
    let rock_gostar = document.getElementsByName('rock_gostar').value
    let metal_gostar = document.getElementsByName('metal-gostar').value
    let ouvir_semana = document.getElementsByName('ouvir_semana').value

    if (!nome1 || !sobrenome2 || !idade || !genero1 || !genero2 || !genero3 || !genero4 || !rock_gostar || !metal_gostar || !ouvir_semana) {
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
        genero1: document.getElementById('Genero1').value,
        genero2: document.getElementById('Genero2').value,
        genero3: document.getElementById('Genero3').value,
        genero4: document.getElementById('Genero4').value,
        rock_gostar: document.getElementsByName('rock_gostar').value,
        metal_gostar: document.getElementsByName('metal-gostar').value,
        ouvir_semana: document.getElementsByName('ouvir_semana').value,
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
