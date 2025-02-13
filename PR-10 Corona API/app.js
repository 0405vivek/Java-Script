const apiURL = "https://api.rootnet.in/covid19-in/stats/history";

function fetchCovidData() {
    return fetch(apiURL)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

function searchData() {
    const searchDate = document.getElementById("searchDate").value;
    if (!searchDate) {
        alert("Please select a date!");
        return;
    }

    fetchCovidData().then(historyData => {
        const result = historyData.find(day => day.day === searchDate);
        if (result) {
            const stateDataContainer = document.getElementById("stateData");
            stateDataContainer.innerHTML = ""; // Clear previous results

            let htmlContent = `<div class="row">`; // Bootstrap row for layout

            result.regional.forEach(state => {
                htmlContent += `
                   
                        <div class="card text-center shadow-sm m-4  p-3 bg-white rounded" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${state.loc}</h5>
                                <p class="card-text"><strong>Cases:</strong> ${state.totalConfirmed}</p>
                                <p class="card-text"><strong>Deaths:</strong> ${state.deaths}</p>
                                <p class="card-text"><strong>Recovered:</strong> ${state.discharged}</p>
                            </div>
                        </div>
                   
                `;
            });

            // htmlContent += `</div>`; // Close row
            stateDataContainer.innerHTML = htmlContent;

            console.log(result);
        } else {
            alert("No data found!");
        }
    });
}
