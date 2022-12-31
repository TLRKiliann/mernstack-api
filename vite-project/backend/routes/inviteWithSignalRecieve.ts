import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Update user confirmation
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = req.body.id;
  const sentMsg: string = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  const returnConfirm: boolean = req.body.returnConfirm;
  //console.log(id, firstName, sentMsg, messagebox, returnConfirm, "setUserConfirm");
  try {
    const result = await pool.query('update members set sentMsg=?,\
      messagebox=?, returnConfirm=? where id=?',
      [sentMsg, messagebox, returnConfirm, id]);
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;