import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Create new member
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
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

module.exports = router;