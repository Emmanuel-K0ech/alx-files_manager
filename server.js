/**
 * Express server definition
 * listening on PORT 5000
 * load routes from 'routes/index.js'
 */
import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
