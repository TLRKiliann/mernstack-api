import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//POST msg to display into terminal
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
  const id: string = req.body.id;
  const date: string = req.body.date;
  const usr: string = req.body.usr;
  const msg: string = req.body.msg;
  const room: string = req.body.room;
  //console.log(id, date, usr, msg, room, "msg post terminal")
  try {
    const result = await pool.query("insert into tableroom (id, date, usr, msg, room) values (?,?,?,?,?)",
      [id, date, usr, msg, room]);
    res.status(201).send("msg from terminal created");
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;