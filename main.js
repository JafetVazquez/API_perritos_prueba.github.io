console.log('IDK')

const URL = 'https://api.thedogapi.com/v1/images/search';


//al abrir la página
fetch(URL)
    .then(result => result.json())
    .then(data =>{
        const img = document.querySelector('img');

        img.src = data[0].url;
    });



//al recargar con el botón
function recargar(){
    fetch(URL)
    .then(result => result.json())
    .then(data =>{
        const img = document.querySelector('img');

        img.src = data[0].url;
    });
}