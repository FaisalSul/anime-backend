import { animeData } from "../animeData";

export const getAnimeRoute = {
    path: '/api/anime/:id',
    method: 'get',
    handler: (req, res) => {

        const id = req.params.id;
        const anime = animeData.find((anime) => anime.id === parseInt(id));
        res.status(200).send(anime);
    },
};