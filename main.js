console.log('IDK')

const URL = 'https://api.thedogapi.com/v1/images/search';

function recargar(){
    fetch(URL)
    .then(result => result.json())
    .then(data =>{
        const img = document.querySelector('img');

        img.src = data[0].url;
    });
}