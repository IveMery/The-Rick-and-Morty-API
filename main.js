// infoMorty = {}

// fetch('https://rickandmortyapi.com/api/character/5')
//     .then((data) => {
//         return data.json()
//     })
//     .then((info) => {
//         console.log(info)
//         infoMorty = info


//         const miH2 = document.querySelector('.name')

//         miH2.innerHTML = infoMorty.name
//     })

// // fetch('https://rickandmortyapi.com/api/character/299').then((data) => {return data.json();}).then((info) => {console.log(info);const titulo = document.querySelector('h1');titulo.textContent = info.name;});


// fetch("https://gateway.marvel.com/v1/public/comics?apikey=cdf503fce8f2c519f899f64cff25fd79&offset=0&orderBy=title")
//     .then((data) => {
//         return data.json()
//     })
//     .then((info) => {

//         console.log(info)
//     })

// fetch('https://rickandmortyapi.com/api/character')
//     .then(data => {
//         return data.json()
//     })
//     .then(personajes => {
//         console.log(personajes)




//         const seccion = document.getElementById('seccion')
//         const nextPage = document.querySelector('#next-page')
//         nextPage.href = personajes.info.next
//         seccion.innerHTML = '';

//         personajes.results.map(personaje => {

//             seccion.innerHTML += `
// <article class="card">
// <div class="card-image"> <img src="${personaje.image}" alt=""></div>
// <div class="card-info">
// <h1 class="card-title">${personaje.name}</h1>
// <p class="card-subtitle"">status:</p>
// <p class="card-status">${personaje.status}</p>
// <p class="card-subtitle">estado:</p>
// <p class="card-species">${personaje.species}</p>
// <p class="card-subtitle">Last known location:</p>
// <p class="card-location">${personaje.location.name}</p>
// <p class="card-subtitle>First seen in:</p>
// <p class="card-episode">${personaje.episode[0]}</p>
// </div>
// </article>`
//         })
//     })


const buscarInfo = (url) => {
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(personajes => {
            console.log(personajes)




            const seccion = document.getElementById('seccion')
            const nextPage = document.querySelector('.next-page')
            nextPage.onclick = () => {

                buscarInfo(personajes.info.next)
            }
            seccion.innerHTML = '';

            personajes.results.map(personaje => {

                seccion.innerHTML += `
    <article class="card">
    <div class="card-image"> <img src="${personaje.image}" alt=""></div>
    <div class="card-info">
    <h1 class="card-title">${personaje.name}</h1>
    <p class="card-subtitle">Status:</p>
    <p class="card-status">${personaje.status}</p>
    <p class="card-subtitle">Estado:</p>
    <p class="card-species">${personaje.species}</p>
    <p class="card-subtitle">Last known location:</p>
    <p class="card-location">${personaje.location.name}</p>
    <p class="card-subtitle">First seen in:</p>
    <p class="card-episode">${personaje.episode[0]}</p>
    </div>
    </article>`
            })
        })

}

buscarInfo('https://rickandmortyapi.com/api/character')