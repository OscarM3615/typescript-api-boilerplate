import dotenv from 'dotenv';

// Load config.
dotenv.config();

const config = {
	port: process.env.PORT ?? 5000,
	mongodb_uri: process.env.MONGODB_URI ?? 'mongodb://localhost/testdb',
	secret_key: process.env.SECRET_KEY ?? 'supersecretkey'
};

export default config;
