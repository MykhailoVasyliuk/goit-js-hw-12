import {fetchImages} from './js/fetchImages'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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
       
        `<a href="${largeImageURL}">
            <div class="photo-card">
                <img src="${webformatURL}" alt="" loading="lazy" />
                <div class="info">
                    <p class="info-item">${likes}
                    <b>Likes</b>
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
            </div>
        </a>` 
       ).join("");

}

let galleryImg = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });

 console.log(galleryImg)