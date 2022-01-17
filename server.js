const express= require('express');
const {use }=require('express/lib/application')

const app = express();


const middleware = (req, res, next) => {


    const d = new Date();
    let day = d.getDay()

    let hour = d.getHours();


        if  (( day==0 || day==6) || (hour<=9 || hour >= 17))  { return res.sendFile(__dirname+'/public/close.html')}


    next()
}
app.use(middleware);

app.use(express.static("public"));


const port = 5000;

app.listen(port, () => console.log(`port is running on port ${port}`));