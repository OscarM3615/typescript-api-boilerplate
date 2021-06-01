import config from './config';
import app from './app';
import db from './db';

const PORT = config.port;

// Notify when database is connected.
db.once('open', () => {
	console.log(`[i] MongoDB database connected.`);
});

// Notify when server is ready.
app.listen(PORT, () => {
	console.log(`[i] Server listening at http://127.0.0.1:${PORT}...`);
});
