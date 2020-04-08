const epxress = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const makePath = (dir, filename) => {
    return path.resolve(__dirname, "..", "public", dir, filename);
};

const todos = ["get milk", "get butter", "apply to jobs"];

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "..", "public")));

//this endpoint serves up the index file
app.get('/', (req, res) => {
    res.render(makePath("/", "index.ejs"));
});

//this endpoint pushes to the end of the todos array
app.post("/todo", (req, res) => {
    todos.push(req.body.todo);
    res.json(req.body);
});

module.exports = app;