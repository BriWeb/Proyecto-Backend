import express from 'express';
import { express_config } from './config.js';
import costosRoutes from './routes/costo.js';

const app = express();

app.set('port', express_config.port);
app.set('host', express_config.host);

app.use(express.json());
app.use(costosRoutes);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Servidor corriendo en 'http://${app.get('host')}:${app.get('port')}`);
})