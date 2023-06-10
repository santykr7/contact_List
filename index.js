const express = require('express')
const path = require('path')

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


app.get('/',(req,res) => {
    res.render("home",{
        title:"CONTACT LIST",
        contact_list:contactList
    });
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
    contactList.push(req.body)
    res.redirect('back')
});

app.get('/del-contact',(req,res) => {
    let phone = req.query.phone
    console.log(phone)

    let contactIndex = contactList.findIndex(contact => 
        contact.phone === phone)

        if(contactIndex != -1){
            contactList.splice(contactIndex, 1) 
        
    }
    res.redirect('back')
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