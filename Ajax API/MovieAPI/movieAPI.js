document.querySelector("#btn").addEventListener("click", ()=>{
    let moviename = document.querySelector("#movieName");
    let movieDetail = document.querySelector("#movieDetail");

    fetch (`https://www.omdbapi.com/?t=${moviename.value}&apikey=49e6c128`)
    .then(res=>res.json())
    .then(data=> {
        console.log(data);

        let result = `<div class="card d-flex justify-content-center" style="width: 18rem;" >
        <img class="card-img-top" src=${data.Poster} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${data.Title}</h5>
            <p class="card-text">${data.Plot}</p>
            <p class="card-text">${data.Year}</p>
            <p class="card-text">${data.Language}</p>
        </div>
        </div>`
        movieDetail.innerHTML = result;
        
    })
    .catch(err=>console.log(err));

    moviename.value="   "
})