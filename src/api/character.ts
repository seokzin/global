import axios from 'axios';

export interface Character {
  id: string;
  name: string;
  aliases: string[];
  titles: string[];
  books: string[];
  tvSeries: string[];
  gender: 'Male' | 'Female';
  died: string;
}

export const PAGE_SIZE = 20;

const parseIdFromUrl = (url: string) => url.split('/').at(-1) as string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const characterFactory = (raw: any): Character => ({
  id: parseIdFromUrl(raw.url),
  name: raw.name,
  aliases: raw.aliases,
  titles: raw.titles,
  books: raw.books[0] === '' ? [] : raw.books,
  tvSeries: raw.tvSeries[0] === '' ? [] : raw.tvSeries,
  gender: raw.gender,
  died: raw.died,
});

const api = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api/characters',
});

export const getCharacters = (): Promise<Character> =>
  api.get('').then((res) => res.data.map(characterFactory));

export const getCharacterById = (id: number) =>
  api.get(`/${id}`).then((res) => characterFactory(res.data));

export const getCharacterPerPage = (page: number, pageSize = PAGE_SIZE) =>
  api
    .get(`?page=${page}&pageSize=${pageSize}`)
    .then((res) => res.data.map(characterFactory));
