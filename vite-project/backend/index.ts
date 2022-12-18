import express, {Request, Response, NextFunction} from 'express';
import mariadb from 'mariadb';
import dotenv from 'dotenv';

const cors = require('cors');
//const db_users = require('db.json');
//FAST_REFRESH=false; (.env)

const PORT = 5000;
//const date = new Date();
const app = express();

const users: any = [];
console.log(users)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

app.use(function(req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  //port: process.env.DB_PORT,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE
});


console.log("Total connections: ", pool.totalConnections());
console.log("Active connections: ", pool.activeConnections());
console.log("Idle connections: ", pool.idleConnections());

app.get('/api/getAllMembers', async (req: Request, res: Response, next: NextFunction) => {
  try {
      const result = await pool.query("select * from members");
      res.status(200).json(result);
  } catch (err) {
    throw err;
  }
  next();
});

app.post('/api/createMembers', async (req: Request, res: Response, next: NextFunction) => {
  const order_id: number | null = req.body.id;
  const img: string = req.body.img;
  const firstName: string = req.body.firstName;
  const lastName: string = req.body.lastName;
  const age: number = req.body.age;
  const email: string = req.body.email;
  const location: string = req.body.location;
  const gender: string = req.body.gender;
  const mainroom: string = req.body.mainroom;
  const room: string = req.body.room;
  const isConnected: boolean = req.body.isConnected;
  const signalRecieve: boolean = req.body.signalRecieve;
  const sentMsg: boolean = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  const returnConfirm: boolean = req.body.returnConfirm;
  const password: string = req.body.password;
  console.log("ALL data", order_id, img, firstName, lastName, age, email, location,
    gender, mainroom, room, isConnected, signalRecieve, sentMsg, messagebox,
    returnConfirm, password)
  
  try {
    const result = await pool.query('insert into members (order_id, img, firstName, lastName, age, email,\
      location, gender, mainroom, room, isConnected, signalRecieve, sentMsg,\
      messagebox, returnConfirm, password) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [order_id, img, firstName, lastName, age, email, location, gender, mainroom, room,
        isConnected, signalRecieve, sentMsg, messagebox, returnConfirm, password]);
    res.status(201).json("New Member Was Created !");
  } catch (err) {
    throw err;
  }
  next();
});

app.listen(PORT, () => {
  console.log(`[+] Server is running on port ${PORT} !`)
});


/*
//Simple login get - post
app.get('/login', (req:Request, res:Response, next:NextFunction) => {
  res.json(users)
  next()
})

app.post('/login', (req:Request, res:Response, next: NextFunction) => {
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
  const id: number | null = Number(req.params.id);
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
  const id: number | null = Number(req.params.id);
  const signalRecieve: boolean = req.body.signalRecieve;
  const messagebox: string = req.body.messagebox;
  try {
    res.status(200).send();
  } catch (err) {
    throw err;
  }
});

//update username + returnConfirm
app.put('/db_users/:id', async (req:Request, res:Response, next:NextFunction) => {
  const id: number | null = Number(req.params.id);
  const firstName: string = req.body.firstName;
  const returnConfirm: boolean = req.body.returnConfirm;
  try {
    res.status(200).send()
  } catch (err) {
    throw err;
  }
});

//update returnConfirm by id
app.put('/db_users/:id', async (req:Request, res:Response, next:NextFunction) => {
  const id: number | null = Number(req.params.id);
  const returnConfirm: boolean = req.body.returnConfirm;
  try {
    res.status(200).send()
  } catch (err) {
    throw err;
  }
});

app.listen(PORT, () => {
  console.log(`[+] Server is running on port ${PORT} !`)
});

//update room - username - connection
app.get('/db_users', (req:Request, res:Response, next:NextFunction) => {
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



