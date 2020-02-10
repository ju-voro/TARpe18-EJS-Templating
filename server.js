const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";


    //https://www.w3resource.com/javascript/object-property-method/date-getDay.php
    switch(currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1: 
            day = "Monday";
            break;
        case 2: 
            day = "Tuesday";
            break;
        case 3: 
            day = "Wednesday";
            break;
        case 4: 
            day = "Thursday";
            break;
        case 5: 
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("An error that should never happen.");
    }

   /* if(currentDay === 6 || currentDay === 0){
        day = "Weekend";
        
    } else {
        day = "Weekday";
    }*/

    res.render('list', {dayToday: day});

    /*if(today.getDay() === 6 || today.getDay() === 0){
        res.send("Yay! It's the weekend!");
    } else {
        res.write("<p>It's not the weekend.</p>")
        res.write("<h1>Go, do some work!</h1>");
        res.send();
    }*/
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
    
});