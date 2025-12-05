import express from "express";
const app = express();
app.get('/users', (req, res) => {
    res.send("Hello this is from backend");
})
app.get('/', (req, res) => {
    res.send("backend");
})

app.listen(7008, ()=>{
    console.log(`Server running at port ${7008}`)
})