import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Update last confirmation
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  const id: number | null = Number(req.params.id);
  const signalRecieve: boolean = req.body.signalRecieve;
  const returnConfirm: boolean = req.body.returnConfirm;
  //console.log(id, signalRecieve, returnConfirm, "confirmationother");

  try {
    const result = await pool.query('update members set\
      signalRecieve=?, returnConfirm=? where id=?', [signalRecieve, returnConfirm, id]);
    res.status(200).send();
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;