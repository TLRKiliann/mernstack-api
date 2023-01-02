import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Update name of room.
router.put('/', async(req: Request, res: Response, next: NextFunction) => {
  const id: number | null = req.body.id;
  const firstName: string = req.body.firstName;
  const mainroom: string = req.body.mainroom;
  const room: string = req.body.room;
  const isConnected: boolean = req.body.isConnected;
  const signalRecieve: boolean = req.body.signalRecieve;
  const sentMsg: string = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  const returnConfirm: boolean = req.body.returnConfirm;
  //console.log(firstName, mainroom, room, isConnected, signalRecieve, sentMsg,
  //  messagebox, returnConfirm, id)
  try {
    const result = await pool.query('update members set firstName=?, mainroom=?, room=?,\
      isConnected=?, signalRecieve=?, sentMsg=?, messagebox=?, returnConfirm=? where id=?',
      [firstName, mainroom, room, isConnected, signalRecieve, sentMsg, messagebox,
        returnConfirm, id]);
    res.status(200).send()
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;