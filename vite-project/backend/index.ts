import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');
//const notes = require('./db.json');
import dotenv from 'dotenv';

const PORT = 5000;
const date = new Date();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

/*const requestLogger = (req:Request, res:Response, next:NextFunction) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
};*/

//app.use(requestLogger);

app.use(function(req:Request, res:Response, next:NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});

let notes = [
  {
    "id": 1,
    "name": "Jeremy",
    "number": "022 343 56 78",
    "editNum": false
  },
  {
    "id": 2,
    "name": "Agnes",
    "number": "021 324 44 54",
    "editNum": false
  },
  {
    "id": 3,
    "name": "Sarah",
    "number": "024 535 33 22",
    "editNum": false
  },
];

app.get("/", (req:Request, res:Response) => {
  res.send("<h1>Hello from server !</h1>").status(200).end();
});

app.get("/info", (req:Request, res:Response) => {
  console.log("Access to info !")
  res.send(`<h4>Number of contacts : ${notes.length}\
    people</h4> ${date}`).status(200).end();
});

app.get("/api/notes", (req:Request, res:Response) => {
  res.json(notes).status(200).end();
});

app.get('/api/notes/:id', (req:Request, res:Response) => {
  const id = Number(req.params.id);
  console.log(id)
  const note = notes.find(note => note.id === id);
  console.log("GET by ID", note);
  if (note) {
    res.json(note)
  } else {
    res.status(404).end();
  }
});

/*const unknownEndpoint = (req:Request, res:Response) => {
  res.status(404).send({ error: 'unknown endpoint' })
};*/

//app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`[+] Server is running on port ${PORT} !`)
});