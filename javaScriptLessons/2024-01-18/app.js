const fileSystem = require('fs');
const data = require('./data.json')
const express = require('express')
const session = require ('express-session')


const app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true
    }
}))

async function readFile(){
    // Sinchroninė versija failo perskaitymo - vengti
    // const fileData = fileSystem.readFileSync("./data.json", "utf-8")
    // failo perskaitymas asinchroniniu būdu
    const fileData = await fileSystem.promises.readFile('./data.json', (err) => {
        if(err) console.log(err);
    })

    console.log(JSON.parse(fileData));
}
async function writeFile(obj)
{
    await fileSystem.writeFile(
        './data.json', 
        JSON.stringify(obj), 
        "utf8", 
        (err) => {
        if (err) console.log(err);
    })
}
readFile()

app.get('/', async(req, res) => {
    console.log('What you want?');
    data.countOfVisitors++;
    await writeFile(data);
    req.session.userId = 1;
    return res.status(200).json({
        message: `It's not a very good day, you are a ${data.countOfVisitors}th visitor and I hate you - it's morning.`
    })
})

app.get('/whats-my-id', (req, res) => {
    if(req.session.userId)
        {
            console.log(req.session.userId);
            return res.status(200).json({ userId: req.session.userId })
        }else{
            req.session.userId = 1;
            return res.status(200).json({ userId: req.session.userId })
        }
    

    return res.send("very good")
})

app.get('/users', (req, res) => {
    console.log(req.session.userId);

    res.status(200).json({ message: "zinute" })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})