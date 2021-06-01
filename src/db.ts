import mongoose from 'mongoose';
import config from './config';

const URI: string = config.mongodb_uri;

mongoose.connect(URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

const connection = mongoose.connection;

export default connection;
