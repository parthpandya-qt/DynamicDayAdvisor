import express from 'express';

const app = express();
const port = 4500;
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let day = 2;
    
    let type = "a weekend";
    let adv = "Take it easy";
    
    if(day === 0 || day === 6){
        type = "weekend";
        adv = "Take it easy";
    }else{
        type = "weekday";
        adv = "Work hard";
    }

    res.render("index.ejs", {
       dayType: type,
       advise: adv,
    });
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);});