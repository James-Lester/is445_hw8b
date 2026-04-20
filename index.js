const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

const app = express();
const upload = multer();
const jsonParser = bodyParser.json();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.static("public"));
app.use(express.static("css"));

// Routes
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});


/*
****************************************
Exercise 1
****************************************
*/
app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1", upload.array(), (request, response) => {
    const name = request.body.name;
    const email = request.body.email;

    const msg = `${name}, thank you for your order. We will keep you posted on delivery status at ${email}.`;
    response.send(msg);

})

/*
****************************************
Exercise 2
****************************************
*/

app.get("/ex2", (request, response) => {
    response.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/api/countries", jsonParser, (request, response) => {
    const countries = request.body;

    const msg = `Your name is ${request.body.name} and you visited ${request.body.countries.length} countries. Keep traveling!`
    response.send(msg);
})

/*
****************************************
Exercise 3
****************************************
*/

const articles = [];

app.get("/ex3", (request, response) => {
    response.sendFile(`${__dirname}/views/ex3.html`);
});


app.get("/articles", (request, response) => {
    response.send(articles);
});

app.post("/articles", upload.array(), (request, response) => {
    const id = articles.length === 0
        ? 1
        : articles.reduce((acc, curr) => curr.id > acc.id ? curr : acc).id + 1;
    const article = JSON.parse(JSON.stringify(request.body));
    article.id = id;
    articles.push(article);
    const msg = `New article added successfully with title "${request.body.title}" and ID ${id}`;
    response.send(msg);
});



// Listener
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
}); 