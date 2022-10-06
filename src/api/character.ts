import axios from 'axios';

export interface Character {
  name: string;
  aliases: string[];
  titles: string[];
  books: string[];
  tvSeries: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const characterFactory = (raw: any): Character => ({
  name: raw.name,
  aliases: raw.aliases,
  titles: raw.titles,
  books: raw.books,
  tvSeries: raw.tvSeries,
});

const api = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api/characters',
});

export const getCharacters = (): Promise<Character> =>
  api.get('').then((response) => response.data.map(characterFactory));

export const getCharacterById = (id: number) =>
  api.get(`/${id}`).then((res) => characterFactory(res.data));

export const getCharacterPerPage = (page: number, pageSize = 10) =>
  api
    .get(`?page=${page}&pageSize=${pageSize}`)
    .then((response) => response.data.map(characterFactory));
