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

//Retrieve all members
app.get('/api/getAllMembers', async (req: Request, res: Response, next: NextFunction) => {
  try {
      const result = await pool.query("select * from members");
      res.status(200).json(result);
  } catch (err) {
    throw err;
  }
  next();
});

//Create new member
app.post('/api/createMembers', async (req: Request, res: Response, next: NextFunction) => {
  const id: number = req.body.id;
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
  
  try {
    const result = await pool.query('insert into members (id, img, firstName, lastName, age, email,\
      location, gender, mainroom, room, isConnected, signalRecieve, sentMsg,\
      messagebox, returnConfirm) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [id, img, firstName, lastName, age, email, location, gender, mainroom, room,
        isConnected, signalRecieve, sentMsg, messagebox, returnConfirm]);
    res.status(201).json("New Member Was Created !");
  } catch (err) {
    throw err;
  }
  next();
});

//Update name of room.
app.put('/api/updateRoom/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const firstName: string = req.body.firstName;
  const mainroom: string = req.body.mainroom;
  const room: string = req.body.room;
  const isConnected: boolean = req.body.isConnected;
  //console.log(id, "server id")
  console.log(firstName, mainroom, room, isConnected, id)
  try {
    const result = await pool.query('update members set\
      firstName=?, mainroom=?, room=?, isConnected=? where id=?',
      [firstName, mainroom, room, isConnected, id]);
    res.status(200).send()
  } catch (err) {
    throw err;
  }
  next();
});

app.put('/api/inviteOtherUser/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const signalRecieve: boolean = req.body.signalRecieve;
  const sentMsg: string = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  console.log(signalRecieve, sentMsg, messagebox, id);
  
  try {
    const result = await pool.query('update members set signalRecieve=?, sentMsg=?, messagebox=? where id=?',
      [signalRecieve, sentMsg, messagebox, id]);
    res.status(200).send()
  } catch (err) {
    throw err;
  }
  next();
});

//Update user confirmation
app.put('/api/setUserConfirm/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const firstName: string = req.body.firstName;
  const room: string = req.body.room;
  const signalRecieve: boolean = req.body.signalRecieve;
  const returnConfirm: boolean = req.body.returnConfirm;
  console.log(id, firstName, room, signalRecieve, returnConfirm, "setUserConfirm");

  try {
    const result = await pool.query('update members set\
      firstName=?, room=?, signalRecieve=?, returnConfirm=? where id=?',
      [firstName, room, signalRecieve, returnConfirm, id]);
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

//Update last confirmation
app.put('/api/confirmation/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const returnConfirm: boolean = req.body.returnConfirm;
  console.log(id, returnConfirm, "confirmation");
  try {
    const result = await pool.query('update members set\
      returnConfirm=? where id=?', [returnConfirm, id]);
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

//POST msg from terminal
app.post('/api/msgTerminal', async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.body.id;
  const date: string = req.body.date;
  const usr: string = req.body.usr;
  const msg: string = req.body.msg;
  const room: string = req.body.room;
  console.log(id, date, usr, msg, room, "msg post terminal")

  try {
  const result = await pool.query("insert into tableroom (id, date, usr, msg, room) values (?,?,?,?,?)",
    [id, date, usr, msg, room]);
  res.status(201).send("msg from terminal created");
  } catch (err) {
    throw err;
  }
  next();
});

//Retrive msg from db for terminal
app.get('/api/retrieveMsgTerminal', async (req: Request, res: Response, next: NextFunction) => {
  try {
  const result = await pool.query('select * from tableroom');
  res.status(200).json(result);
  } catch (err) {
    throw err;
  }
  next();
})

app.listen(PORT, (): void => {
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
*/