import {type IMovie } from '~/interfaces/IMovie';

let storedItems = null;
if(process.client){
    storedItems = localStorage.getItem('CINEVERSE_BOOKMARKEDS');
}
const bookmarkeds = ref(storedItems ? JSON.parse(storedItems) : []);

// INFO: Verifica se o item está salvo na lista de favoritos
export const checkBookmarked = (movie: IMovie) => {
    return bookmarkeds.value?.find((m: IMovie) => m.id === movie.id)
}

//INFO: Adiciona ou remove o item na lista de favoritos
export const toggleBookmarked = (movie: IMovie) => {
    if(checkBookmarked(movie)) {
        bookmarkeds.value = bookmarkeds.value.filter((m: IMovie) => m.id !== movie.id);
    }else{
        bookmarkeds.value.unshift(movie);
    }
    localStorage.setItem('CINEVERSE_BOOKMARKEDS', JSON.stringify(bookmarkeds.value));
}