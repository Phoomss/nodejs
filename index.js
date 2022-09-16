const { request, response } = require('express')
const express = require('express')
const app = express()
// const ejs = require('ejs')

app.set('view engine', 'ejs')

// app.use((require, response) => {
//     response.send("hello express ho ho ho.........")
// })


app.get("/", (request, response)=>{
    // response.send("Home")
    response.render('index');

})
app.get("/about", (request, response)=>{
    // response.send("About")
    response.render('about');
})
app.get("/promotion", (request, response)=>{
    response.render('promotion');
})
app.get("/new", (request, response)=>{
    response.render('new');
})
app.get("/contact", (request, response)=>{
    response.render('contact');
})

app.get("/product/:id", (request, response)=>{
    let id =request.params.id
    //response.send("Product Number: " + id)
    response.render('product',{ pid: id} )
})

app.listen(3000, ()=>{
    console.log("App is running on port 3000.")
    console.log("good")
})


