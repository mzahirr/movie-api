const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://movie_user:online91@ds051665.mlab.com:51665/heroku_pz7j7czc', { useNewUrlParser: true });
  mongoose.connection.on('open', ()=> {
     console.log('Mongodb Connected');
  });

    mongoose.connection.on('error', (err)=> {
        console.log('Mongodb error', err);
    });

    mongoose.Promise = global.Promise;
};
