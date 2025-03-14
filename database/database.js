import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/medi-app');

const db =mongoose.connection;

db.on('error', console.error.bind(console, 'conection error: '));

db.once(
    'open', function(){
        console.log('Database conected successfully!');
    }
);

export default db;