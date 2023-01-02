import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//POST msg from terminal
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
  const id: string = req.body.id;
  const date: string = req.body.date;
  const user: string = req.body.user;
  const msg: string = req.body.msg;
  const room: string = req.body.room;
  //console.log(id, date, user, msg, room, "msg post terminal")
  try {
    const result = await pool.query("insert into privatechat (id, date, user, msg, room) values (?,?,?,?,?)",
      [id, date, user, msg, room]);
    res.status(201).send("msg from privatechat created");
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;