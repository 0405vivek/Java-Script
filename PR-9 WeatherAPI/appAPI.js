document.querySelector("#btn").addEventListener("click", () => {
    let cityName = document.querySelector("#city");
    let WeatherData = document.querySelector("#WeatherData");
    let setda
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=583324e03ae850c3564d60006371da2b&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);



        function MinToHour(min) {
            let date = new Date(min * 1000); // Convert to milliseconds
            return date.toLocaleTimeString(); // Convert to readable time format
        }

        let sunrisetime = MinToHour(data.sys.sunrise)
        let sunsettime = MinToHour(data.sys.sunset)

        let now = new Date();
        let date = now.toLocaleDateString(); 
        let time = now.toLocaleTimeString(); 

        let result = `<div class="row d-flex justify-content-center py-5">
  <div class="col-md-8 col-lg-6 col-xl-5">

    <div class="card text-body" style=" border-radius: 35px;">
      <div class="card-body p-4">

        <div class="d-flex">
          <h6 class="flex-grow-1">${data.name} , ${data.sys.country} </h6>
          <h6>${date} - ${time}</h6>
        </div>

        <div class="d-flex flex-column text-center mt-5 mb-4">
          <h6 class="display-4 mb-0 font-weight-bold"> ${data.main.temp}°C </h6>
          <span class="small" style="color: #868B94">${data.weather[0].main}</span>
        </div>

        <div class="d-flex align-items-center">
          <div class="flex-grow-1" style="font-size: 1rem;">
            <div class= "mr-2"><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> Wind Speed  ${data.wind.speed} km/h
              </span>
            </div>
            <div class= "mr-2"><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">Humidity ${data.main.humidity}%
              </span></div>
            <div class= "mr-2"><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> Sunrise : ${sunrisetime}
              </span></div>
            <div class= "mr-2"><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> Sunset : ${sunsettime}
              </span></div>
          </div>
          <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"
              width="100px">
          </div>
        </div>

      </div>
    </div>

  </div>
</div>`;
  
        WeatherData.innerHTML = result;
  
        cityName.value = "";
      })
      .catch((err) => console.log(err));
  });
  