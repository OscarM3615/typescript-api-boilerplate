import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import UserRouter from './routes/user.route';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
	res.json({
		message: 'Hello, world!'
	});
});

app.use('/users', UserRouter);

// Default route.
app.use('/**', (_req, res) => {
	res.status(404).json({
		error: 'Route not found'
	});
});

export default app;
