let breedListSelect = document.querySelector("#breedList");

function BreedListt(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data.message)

        for(let breed in data.message){
            let option =document.createElement('option');
            option.value = breed;
            option.innerHTML = breed;
            breedListSelect.append(option)
        }

    })

    .catch(err=>console.log(err));
    
}

BreedListt();

document.querySelector(`#btn`).addEventListener("click" ,()=>{
    let breed = breedListSelect.value;
    // console.log(breed);

    let imagesDiv = document.querySelector("#image")
     imagesDiv.innerHTML=""

    fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => res.json())
    .then((data)=>{
        // console.log(data.message);
        data.message.forEach((item) => {
            let image = document.createElement('img');
            image.setAttribute('src', item)
            image.style.height = "200px"
            image.style.width = "200px"
            image.style.margin = "10px"
            imagesDiv.append(image);
            console.log(data.message);
            
         })
        
    }) .catch(err=> console.log(err));
    
})