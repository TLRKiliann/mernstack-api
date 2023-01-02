import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//send msg to sender of invitation to update room
router.put('/', async(req: Request, res: Response, next: NextFunction) => {
  const id: number | null = req.body.id;
  const room: string = req.body.room;
  //console.log(room, id);
  try {
    const result = await pool.query('update members set room=? where id=?',
      [room, id]);
    res.status(200).send()
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;