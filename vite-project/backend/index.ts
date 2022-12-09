import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');
import dotenv from 'dotenv';


const PORT = 5000;
const date = new Date();
const app = express();
const users: any[] = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

//Simple login
app.get('/login', (req:Request, res:Response, next:NextFunction) => {
  res.json(users)
  next()
})

app.post('/login', (req:Request, res:Response, next:NextFunction) => {
  const user = { username: req.body.username, password: req.body.password }
  users.push(user)
  console.log(users)
  res.status(201).send()
  next()
})
console.log(users)
app.listen(PORT, () => {
  console.log(`[+] Server is running on port ${PORT} !`)
});


/*
to verify error with middleware
const requestLogger = (req:Request, res:Response, next:NextFunction) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
};*/

//app.use(requestLogger);

//const getAllMembers = require('./routes/allMembers');

/*
app.use(function(req:Request, res:Response, next:NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});
*/

/*
//retrieve all members
app.get("/api/getAllMembers", (req:Request, res:Response, next:NextFunction) => {
  try {
    res.json(notes).status(200).end();
  } catch (err) {
    throw err;
  }
  next();
});

//MySQL login
app.post('/login', async (req:Request, res:Response, next:NextFunction) => {
  const username:string = req.body.username;
  console.log(username, 'username')

  const password:string = req.body.password;
  console.log(password, 'password')
  
  try {
    const result = await pool.query('select * from\
      loggers where username = ? and password = ?',
    [username, password]);
    res.status(201).json("Accepted !")
  } catch (err) {
    throw err;
  }
  next();
});
*/


//For real api with routes folder
//app.use('/api/getAllMembers', getAllMembers);

/*
Middleware to verify
const unknownEndpoint = (req:Request, res:Response) => {
  res.status(404).send({ error: 'unknown endpoint' })
};

app.use(unknownEndpoint);*/

/*
//server-json training
app.get("/", (req:Request, res:Response, next:NextFunction): void => {
  res.send("<h1>Hello from server !</h1>").status(200).end();
  next();
});

app.get("/info", (req:Request, res:Response, next:NextFunction): void => {
  console.log("Access to info !")
  res.send(`<h4>Number of contacts : ${notes.length}\
    people</h4> ${date}`).status(200).end();
  next();
});

app.get('/api/notes/:id', (req:Request, res:Response, next:NextFunction): void => {
  const id = Number(req.params.id);
  console.log(id)
  const note = notes.find(note => note.id === id);
  console.log("GET by ID", note);
  if (note) {
    res.json(note)
  } else {
    res.status(404).end();
  }
  next();
});*/