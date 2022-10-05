import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api/characters',
});

export const getCharacters = () =>
  api.get('').then((response) => response.data);

export const getCharacterById = (id: number) =>
  api.get(`/${id}`).then((response) => response.data);

export const getCharacterPerPage = (page: number, pageSize = 10) =>
  api
    .get(`?page=${page}&pageSize=${pageSize}`)
    .then((response) => response.data);
