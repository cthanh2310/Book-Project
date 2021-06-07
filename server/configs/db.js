const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            isOpen: false,
        });
        console.log('Connect successfully!')
    } catch(error){
        console.log('connect failed!!')
    }
}
module.exports = {connect}