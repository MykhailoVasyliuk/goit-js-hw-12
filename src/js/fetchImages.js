
export async function fetchImages(query) {
  const API_KEY= '38163154-14587bac505c0d824ed01fdaa';
   
    return await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&orientation=horizontal&order=popular&image_type=photo&safesearch=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
    
  }
  