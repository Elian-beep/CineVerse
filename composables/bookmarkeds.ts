import { type IMovie } from '~/interfaces/IMovie';
import type { IStream } from '~/interfaces/IStream';
import type { ITv } from '~/interfaces/ITv';

export const bookmarkeds = ref();

export const asyncBookmarkedsStorage = () => {
    let storedItems = null;
    if (process.client) {
        storedItems = localStorage.getItem('CINEVERSE_BOOKMARKEDS');
    }
    bookmarkeds.value = storedItems ? JSON.parse(storedItems) : [];
}

// INFO: Verifica se o item está salvo na lista de favoritos
export const checkBookmarked = (stream: IMovie | ITv | IStream) => {
    return bookmarkeds.value?.find((s: IMovie | ITv | IStream) => s.id === stream.id)
}

//INFO: Adiciona ou remove o item na lista de favoritos
export const toggleBookmarked = (stream: IMovie | ITv | IStream, type?: 'movie' | 'tv') => {
    if (checkBookmarked(stream)) {
        bookmarkeds.value = bookmarkeds.value.filter((s: IMovie | ITv | IStream) => s.id !== stream.id);
    } else {
        bookmarkeds.value.unshift(stream);
    }
    localStorage.setItem('CINEVERSE_BOOKMARKEDS', JSON.stringify(bookmarkeds.value));
}