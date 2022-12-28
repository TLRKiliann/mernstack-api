import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Update user confirmation
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const firstName: string = req.body.firstName;
  const sentMsg: string = req.body.sentMsg;
  const messagebox: string = req.body.messagebox;
  const returnConfirm: boolean = req.body.returnConfirm;
  //console.log(id, firstName, sentMsg, messagebox, returnConfirm, "setUserConfirm");

  try {
    const result = await pool.query('update members set firstName=?, sentMsg=?, \
      messagebox=?, returnConfirm=? where id=?',
      [firstName, sentMsg, messagebox, returnConfirm, id]);
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;