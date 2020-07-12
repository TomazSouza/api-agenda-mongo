const mongoose = require('mongoose');

module.exports = () => {
    const uri = 'mongodb://tomaz:ZAMcry189@ds052827.mlab.com:52827/mogoproducts';
    mongoose.set('useCreateIndex', true);
    mongoose.connect(uri, {useNewUrlParser: true});  
};