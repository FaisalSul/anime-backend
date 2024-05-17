//delete a anime

import { animeData } from "../animeData";

export const deleteAnimeRoute = {
    path: '/api/anime/:id',
    method: 'delete',
    handler: (req, res) => {
        
            const id = req.params.id;
            const anime = animeData.find((anime) => anime.id === parseInt(id));

            if (!anime) {
                res.status(404).json({
                    message: 'Anime not found'

                });
            }

            const index = animeData.indexOf(anime);
            console.log(index);
            console.log(anime);
            animeData.splice(index, 1);
            res.status(200).json({
                message: 'Anime deleted successfully'
            });
    }
};

