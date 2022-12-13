import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');
const db_users = require('db.json');
import dotenv from 'dotenv';

const PORT = 5000;
const date = new Date();
const app = express();

const users: any = [];
console.log(users)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

//Simple login get - post
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

//catch all users
app.get('/db_users', (req:Request, res:Response, next:NextFunction) => {
  res.json(db_users)
  next()
})

//Setting room & isConnect
app.put('/db_users/:id', async (req:Request, res:Response, next:NextFunction) => {
  const id: number | null = req.body.id;
  const mainroom: string = req.body.mainroom;
  const room: string = req.body.room;
  const isConnected: boolean = req.body.isConnected;
  try {
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

//Ask invitation
app.put('/db_users/:id', async (req:Request, res:Response, next:NextFunction) => {
  const id: number | null = req.body.id;
  const signalRecieve: boolean = req.body.signalRecieve;
  const messagebox: string = req.body.messagebox;
  try {
    res.status(200).send();
  } catch (err) {
    throw err;
  }
});

//
app.put('/db_users/:id', async (req:Request, res:Response, next:NextFunction) => {
  const id: number | null = req.body.id;
  const returnConfirm: boolean = req.body.returnConfirm;
  try {
    res.status(200).send();
  } catch (err) {
    throw err;
  }
});

app.listen(PORT, () => {
  console.log(`[+] Server is running on port ${PORT} !`)
});

/*
//update room - username - connection
/*app.get('/db_users', (req:Request, res:Response, next:NextFunction) => {
  res.json(users)
  next()
})

app.post('/login', (req:Request, res:Response, next:NextFunction) => {
  const user = { username: req.body.username, password: req.body.password }
  console.log(user, 'user')
  users.push(user)
  console.log(users, "users list info")
  res.status(201).send()
  next()
})
*/