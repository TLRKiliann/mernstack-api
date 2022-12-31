import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//To reset params when first user decline invitation.
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = req.body.id;
  const room: string = req.body.room;
  const signalRecieve: boolean = req.body.signalRecieve;
  const sentMsg: string = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  //console.log(id, room, signalRecieve, sentMsg, messagebox);
  
  try {
    const result = await pool.query('update members set room=?, signalRecieve=?,\
      sentMsg=?, messagebox=? where id=?', [room, signalRecieve, sentMsg, messagebox, id])
    res.status(200).send()
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;