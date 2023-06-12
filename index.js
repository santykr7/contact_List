const express = require('express')
const path = require('path')

//db
const db = require('./config/mongoose');
const Contact = require('./models/contact')

const app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'view'))
app.use(express.urlencoded())
app.use(express.static('public'))

// //middleware 1
// app.use(logger1)


// //middleware 2
// app.use(logger2)



//sample contactlist details is here
var contactList = [
    {
        name:"santy",
        phone:"0000"

    },
    {
        name:"malappa",
        phone:"1111"

    },
    {
        name:"santu",
        phone:"2222"

    }
]

//fetch all the data 

app.get('/',(req,res) => {

    Contact.find({},)
    .then((data) => {
        res.render("home",{
            title:"CONTACT LIST",
            contact_list:data
    })
})
});


app.get('/practice',(req,res) => {
    res.render("practice")
});

app.post('/create-contact',(req,res) => {
    // contactList.push ({
    //     name:req.body.name,
    //     phone:req.body.phone
    // })
    // console.log(req.body)
    // console.log(req.body.name)
    // console.log(req.body.phone)
    // res.redirect('/practice')

    // contactList.push(req.body)
    Contact.create({                                                                                
        name:req.body.name,
        phone:req.body.phone
        
    },).then((data) => {console.log('success',data)
    }).catch((err) => {
        console.log('errror')
    })
        return res.redirect('back');
    });
    

app.get('/del-contact',(req,res) => {
    // GET THE ID QUERY FROM URL
    let id = req.query.id
    console.log(id)

    Contact.findByIdAndDelete(id)
    .then((data) => {
        res.redirect('back')
    })
})
      
    

// //mw1
// function logger1(req,res,next) {
//     // req.myName = "Dhruv"
//     // console.log('mwww 1 called')
//     next()
// }

// //mw2
// function logger2(req,res,next) {
//     // console.log('My name from logger2',req.myName)
//     // console.log('mwww 2 called')
//     next()
// }

app.listen(3000)