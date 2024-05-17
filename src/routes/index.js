import { getAnimesRoute } from './getAnimes';
import { getAnimeRoute } from './getAnimeRoute';
import { postAnimeRoute } from './postAnimeRoute';
import { deleteAnimeRoute } from './deleteAnimeRoute';
import { putAnimeRoute } from './putAnimeRoute';
import { testRoute } from './testRoute';


export const routes = [
    testRoute,
    getAnimesRoute,
    getAnimeRoute,
    postAnimeRoute,
    deleteAnimeRoute,
    putAnimeRoute
];
