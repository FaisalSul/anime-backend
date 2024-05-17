import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

// Root route to handle GET requests to "/"
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

// Add all the routes to our Express server
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
