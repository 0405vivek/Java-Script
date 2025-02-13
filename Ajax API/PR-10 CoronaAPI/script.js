const apiUrl = "https://disease.sh/v3/covid-19/";

const countrySelect = document.getElementById("country");
const casesEl = document.getElementById("cases");
const deathsEl = document.getElementById("deaths");
const recoveredEl = document.getElementById("recovered");

// Fetch global data initially
fetch(`${apiUrl}all`)
    .then(res => res.json())
    .then(data => updateStats(data));

// Fetch country list
fetch(`${apiUrl}countries`)
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            let option = document.createElement("option");
            option.value = country.country;
            option.textContent = country.country;
            countrySelect.appendChild(option);
        });
    });

// Fetch country-specific data when selected
countrySelect.addEventListener("change", () => {
    let countryName = countrySelect.value;
    fetch(`${apiUrl}countries/${countryName}`)
        .then(res => res.json())
        .then(data => updateStats(data));
});

// Function to update statistics
function updateStats(data) {
    casesEl.textContent = data.cases.toLocaleString();
    deathsEl.textContent = data.deaths.toLocaleString();
    recoveredEl.textContent = data.recovered.toLocaleString();
}


