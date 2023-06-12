const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/contact_list_db')

//to check connection
const db = mongoose.connection;

//error
db.on('eerror',console.log.bind(console,'error in connecting in db'));

//
db.once('open',function() {
    console.log('connected to db')
})