const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();

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

app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1", upload.array(), (request, response) => {
    const name = request.body.name;
    const email = request.body.email;

    const msg = `${name}, thank you for your order. We will keep you posted on delivery status at ${email}.`;
    response.send(msg);

})

// Listener
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
}); 