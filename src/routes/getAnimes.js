import { animeData } from "../animeData";

export const getAnimesRoute = {
    path: '/api/anime',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send(animeData);
    },
};
