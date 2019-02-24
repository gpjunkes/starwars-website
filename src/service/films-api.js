import { http } from './http'

export const fetchFilms = () => http.get(`films/`)
export const fetchFilm = film => http.get(`films/${film}`)