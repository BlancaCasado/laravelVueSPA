import {http, httpFile} from './http_service';

export function createHistory(data) {
    return httpFile().post('/histories', data);
}

export function loadHistories() {
    return http().get('/histories');
}

export function deleteHistory(id) {
    return http().delete(`histories/${id}`);
}

export function updateHistory(id, data) {
    return httpFile().post(`histories/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`histories?page=${nextPage}`);
}