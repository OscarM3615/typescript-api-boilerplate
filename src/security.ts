import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from './config';

const SECRET_KEY = config.secret_key;

export const generateJWT = (payload: string | object) => {
	return jwt.sign(payload, SECRET_KEY, {
		expiresIn: '1h'
	});
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.status(401).json({
		error: 'JWT is required'
	});

	jwt.verify(token, SECRET_KEY, (err: any, identity: any) => {
		if (err) return res.status(401).json({
			error: 'JWT is invalid'
		});

		req.identity = identity;

		next();
	});
}
