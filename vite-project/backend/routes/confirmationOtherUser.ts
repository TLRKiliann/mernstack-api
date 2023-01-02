import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Update last confirmation
router.put('/', async(req: Request, res: Response, next: NextFunction) => {
  const id: number | null = req.body.id;
  const room: string = req.body.room;
  const signalRecieve: boolean = req.body.signalRecieve;
  const returnConfirm: boolean = req.body.returnConfirm;
  //console.log(id, room, signalRecieve, returnConfirm, "confirmationother");
  try {
    const result = await pool.query('update members set room=?, signalRecieve=?,\
      returnConfirm=? where id=?', [room, signalRecieve, returnConfirm, id]);
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;