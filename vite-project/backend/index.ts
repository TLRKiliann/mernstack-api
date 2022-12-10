import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');
import dotenv from 'dotenv';


const PORT = 5000;
const date = new Date();
const app = express();

const users: any[] = [];
console.log(users, "users list info")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

//Simple login get - post
app.get('/login', (req:Request, res:Response, next:NextFunction) => {
  res.json(users)
  next()
})

app.post('/login', (req:Request, res:Response, next:NextFunction) => {
  const user = { username: req.body.username, password: req.body.password }
  console.log(user, 'user')
  users.push(user)
  res.status(201).send()
  next()
})

app.listen(PORT, () => {
  console.log(`[+] Server is running on port ${PORT} !`)
});
