import {fetchImages} from './js/fetchImages'

const inputRef = document.querySelector('input[name="searchQuery"]');
const cardRef  = document.querySelector('.gallery');
let queryText = "";


inputRef.addEventListener('input', onQueryInput);


function onQueryInput(){
    queryText = inputRef.value.trim();

    fetchImages(queryText).then(data => {
        cardRef.innerHTML = onQueryMarcup(data);
    });
}

function onQueryMarcup(queryObject){

     return queryObject.hits.map(({ webformatURL , largeImageURL , tags , likes , views , comments , downloads }) => 
       
        `<div class="photo-card">
            <img src="${webformatURL}" alt="" loading="lazy" />
            <div class="info">
                <p class="info-item">
                <b>${likes}</b>
                </p>
                <p class="info-item">
                <b>${views}</b>
                </p>
                <p class="info-item">
                <b>${comments}</b>
                </p>
                <p class="info-item">
                <b>${downloads}</b>
            </p>
            </div>
        </div>` 
       ).join("");

}