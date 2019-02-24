import { http } from './http'

export const fetchFilms = () => http.get(`films/`)

