//delete a course

import { animeData } from "../animeData";

export const putAnimeRoute = {
    path: '/api/anime/:id',
    method: 'put',
    handler: (req, res) => {

            const id = req.params.id;
            const anime = animeData.find((anime) => anime.id === parseInt(id));

            if (!anime) {
                res.status(404).json({
                    message: 'Anime not found'

                });
            }

            const index = animeData.indexOf(anime);

            const { title, description, estimatedTime, yearStarted, } = req.body;
            const data = {
                id: parseInt(id),
                title: title,
                description: description,
                estimatedTime: estimatedTime,
                yearStarted: yearStarted,
            }
            animeData[index] = data;
            res.status(200).json({
                message: 'Anime updated successfully'
            });
    }
};

