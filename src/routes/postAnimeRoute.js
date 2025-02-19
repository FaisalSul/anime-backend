import { animeData } from "../animeData";

export const postAnimeRoute = {
    path: '/api/anime',
    method: 'post',
    handler: (req, res) => {

         { title, description, estimatedTime, yearStarted, } = req.body;
        const id = Math.floor(process.uptime());
        const data = {
            id: id,
            title: title,
            description: description,
            estimatedTime: estimatedTime,
            yearStarted: yearStarted,
        }
        animeData.push(data);
        res.status(201).json({
            message: 'Anime created successfully',
            anime: data,
        });

    },
};
