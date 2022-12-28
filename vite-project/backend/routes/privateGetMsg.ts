import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

const pool = require('../dbConnection');

const connection = pool;

//Retrive msg from db for terminal
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await pool.query('select * from privatechat');
    res.status(200).json(result);
  } catch (err) {
    throw err;
  }
  next();
});

module.exports = router;