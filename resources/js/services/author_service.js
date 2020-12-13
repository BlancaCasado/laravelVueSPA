import {http, httpFile} from './http_service';

export function createAuthor(data) {
    return httpFile().post('/authors', data);
}

export function loadAuthors() {
    return http().get('/authors');
}

export function deleteAuthor(id) {
    return http().delete(`authors/${id}`);
}

export function updateAuthor(id, data) {
    return httpFile().post(`authors/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`authors?page=${nextPage}`);
}