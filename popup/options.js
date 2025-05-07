console.log("Load options.js script");

const defaultParameters = {
    modalAfter: 60, // Temps avant d'afficher le modal (en secondes)
    popupLife: 30,  // Durée de vie du popup (en secondes)
    titleFR: 'Inactivit&eacute; d&eacute;tect&eacute;e !',
    txtFR: 'Voulez-vous maintenir la session ouverte?',
    titleNL: 'Inactiviteit gedetecteerd !',
    txtNL: 'Wil je de sessie open houden?',
    titleEN: 'Inactivity detected !',
    txtEN: 'Do you want to keep the session open?'
};

// Initialiser les paramètres par défaut si non définis
function initializeDefaultParameters() {
    browser.storage.local.get(null).then((results) => {
        let keys = Object.keys(results);

        // Vérifier si chaque clé par défaut existe, sinon l'ajouter
        for (let key in defaultParameters) {
            if (!keys.includes(key)) {
                let paramToStore = {};
                paramToStore[key] = defaultParameters[key];
                browser.storage.local.set(paramToStore);
            }
        }
        // Get existing stored values and fill in the popup form
        getSavedParameters();
    }, onError);
}

// Charger les paramètres existants et remplir le formulaire
function getSavedParameters() {
    browser.storage.local.get(null).then((results) => {
        let keys = Object.keys(results);
        for (let key of keys) {
            let value = results[key];
            showSavedParameters(key, value);
        }
    }, onError);
}

// Afficher les paramètres dans les champs du formulaire
// function showSavedParameters(id, value) {
//     console.log("Key : " + id + " | Value : " + value);
//     const element = document.getElementById(id);
//     if (element == null) {
//         console.log("Element '" + id + "' does not exist");
//     } else {
//         element.value = value;
//     }
// }

function showSavedParameters(id, value) {
    console.log("Key : " + id + " | Value : " + value);
    const element = document.getElementById(id);
    if (element == null) {
        console.log("Element '" + id + "' does not exist");
    } else {
        element.value = decodeHTML(value); // Decode HTML entities before displaying
    }
}


// Enregistrer les modifications apportées par l'utilisateur
var btnTimeoutModifier = document.getElementById("extTimeoutOptionbtn");
btnTimeoutModifier.addEventListener("click", function () {
    console.log("Clicked on button");

    const modalAfter = document.getElementById("modalAfter").value;
    const popupLife = document.getElementById("popupLife").value;
    const titleFR = document.getElementById("titleFR").value;
    const titleNL = document.getElementById("titleNL").value;
    const titleEN = document.getElementById("titleEN").value;
    const txtFR = document.getElementById("txtFR").value;
    const txtNL = document.getElementById("txtNL").value;
    const txtEN = document.getElementById("txtEN").value;

    let paramToStore = {
        modalAfter: modalAfter,
        popupLife: popupLife,
        titleFR: titleFR,
        titleNL: titleNL,
        titleEN: titleEN,
        txtFR: txtFR,
        txtNL: txtNL,
        txtEN: txtEN
    };

    console.log("Show Modal after : " + modalAfter);
    console.log("Popup life : " + popupLife);

    // Enregistrer les champs modifiés
    //browser.storage.local.set(paramToStore);
    browser.storage.local.set(paramToStore).then(() => {
        console.log("Parameters saved successfully!");
        alert("Settings have been updated.");
    });
});

// Gérer les erreurs
function onError(error) {
    console.log(error);
}

function decodeHTML(str) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
}

// Initialiser les paramètres par défaut au chargement
initializeDefaultParameters();