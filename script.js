let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function () {
    menu.classList.toggle('active')
}
const results = document.querySelector('#results');
async function asyncFetch(value) {
    const res = await fetch(`https://swapi.py4e.com/api/${value}`);
    const data = await res.json();
    displayResults(data, value)
}

document.querySelector('#buttons').addEventListener('click', e => {
    /* e.preventDefault() */
    asyncFetch(e.target.getAttribute("id"));

})

const starWar = document.getElementById('results')

starWar.addEventListener('click', getStartItem)





function displayResults(data, value) {
    let output = "";


    if (value === 'starships') {
        data.results.forEach(item => {
            output += `
            <div class='result-item' id="block">                                
                    <h1><span>Name: </span>${item.name}</h1> 
                    <div class='block' > 

                    <img src='./img/ship.png'alt=''/>                                       
                    <h2> <span>Categories:</span> ${value}</h2>
                    <h2><span>Class starship:</span> ${item.starship_class}</h2> 
                    <h3><span>Model:</span> ${item.model}</h3>
                    <h3><span>Manufacturee:</span> ${item.manufacturer}</h3>
                    <a href="#buttons"><button>Back</button></a>
                    </div>
            </div>
            `

        })
    }
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
            <div class='result-item'>                                
            <h1><span>Name: </span>${item.name}</h1> 
            <div class='block'> 
            <img src='./img/dart.png'alt=''/>                               
            <h2> <span>Categories:</span> ${value}</h2>
            <h2><span>Gender:</span> ${item.gender}</h2> 
            <h3><span>Birth day: </span> ${item.birth_year}</h3>
            <h3><span>Starships:</span> ${item.starships}</h3>
            <a href="#buttons"><button>Back</button></a>
            </div>
            </div>`
        })
    }
    if (value === 'vehicles') {
        data.results.forEach(item => {
            output +=
                `
            <div class='result-item'>                                
            <h1><span>Name: </span>${item.name}</h1> 
            <div class='block'> 
            <img src='./img/transport.png'alt=''/>                               
            <h2> <span>Categories: </span> ${value}</h2>
            <h2><span>Manufacturer: </span> ${item.manufacturer}</h2> 
            <h3><span>Model: </span> ${item.model}</h3>
            <h3><span>Vehicle class: </span> ${item.vehicle_class}</h3>
            <a href="#buttons"><button>Back</button></a>
            </div>
            </div>`
            console.log(data)
        })
    }
    if (value === 'films') {
        data.results.forEach(item => {
            output += `
            <div class='result-item'>                                
            <h1><span>Name: </span>${item.title}</h1> 
            <div class='block'> 
            <img src='./img/films.png'alt=''/>                               
            <h2> <span>Categories:</span> ${value}</h2>
            <h2><span>Producer:</span> ${item.producer}</h2> 
            <h3><span>Director: </span> ${item.director}</h3>
            <h3><span>Release_date:</span> ${item.release_date}</h3>
            <a href="#buttons"><button>Back</button></a>
            </div>
            </div>`
            console.log(data)
        })
    }
    if (value === 'planets') {
        data.results.forEach(item => {
            output += `
            <div class='result-item'>                                
            <h1><span>Name: </span>${item.name}</h1> 
            <div class='block'> 
            <img src='./img/planet.png'alt=''/>                               
            <h2> <span>Categories:</span> ${value}</h2>
            <h2><span>Terrain:</span> ${item.terrain}</h2> 
            <h3><span>Climate: </span> ${item.climate}</h3>
            <h3><span>Population:</span> ${item.population}</h3>
            <a href="#buttons"><button>Back</button></a>
            </div>
            </div>`

        })
    }
    if (value === 'species') {
        data.results.forEach(item => {
            output += `
            <div class='result-item'>                                
            <h1><span>Name: </span>${item.name}</h1> 
            <div class='block'> 
            <img src='./img/species.png'alt=''/>                               
            <h2> <span>Categories: </span> ${value}</h2>
            <h2><span>Clasification: </span> ${item.classification}</h2> 
            <h3><span>Average Lifespan: </span> ${item.average_lifespan}</h3>
            <h3><span>Designation: </span> ${item.designation}</h3>
            <a href="#buttons"><button>Back</button></a>
            </div>
            </div>`
        })
    }

    results.innerHTML = output;
}

