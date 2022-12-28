import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//To reset params when second user decline invitation.
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const firstName: string = req.body.firstName;
  const room: string = req.body.room;
  const sentMsg: string = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  const returnConfirm: boolean = req.body.returnConfirm;
  //console.log(id, firstName, room, sentMsg, messagebox, returnConfirm)
  try {
    const result = await pool.query('update members set firstName=?, room=?, sentMsg=?,\
      messagebox=?, returnConfirm=? where id=?',
      [firstName, room, sentMsg, messagebox, returnConfirm, id])
    res.status(200).send()
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;