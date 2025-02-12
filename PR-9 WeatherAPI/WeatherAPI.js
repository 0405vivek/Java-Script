document.querySelector("#btn").addEventListener("click", () => {
    let cityName = document.querySelector("#city");
    let WeatherData = document.querySelector("#WeatherData");
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=583324e03ae850c3564d60006371da2b&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        let result = `<section class="vh-100" >
                  <div class="container py-5 h-100">
                      <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col-md-10 col-lg-8 col-xl-6">
  
                          <div class="card bg-dark text-white" style="border-radius: 40px;">
                          <div class="bg-image" style="border-radius: 35px;">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                              class="card-img" alt="weather" />
                              <div class="mask" style="background-color: rgba(190, 216, 232, .5);"></div>
                          </div>
                          <div class="card-img-overlay text-dark p-5">
                              <h2 class="mb-0">${data.name}</h2>
                              <p class="display-2 my-3">${data.main.temp}°C</p>
                              <p class="mb-2">Feels Like: <strong>${data.main.feels_like}°C</strong></p>
                              <h5>${data.weather[0].description}</h5>
                          </div>
                          </div>
  
                      </div>
                      </div>
                  </div>
                  </section>`;
  
        WeatherData.innerHTML = result;
  
        cityName.value = "";
      })
      .catch((err) => console.log(err));
  });
  