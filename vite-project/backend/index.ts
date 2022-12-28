import express, {Request, Response, NextFunction} from 'express';
import mariadb from 'mariadb';
import dotenv from 'dotenv';

const cors = require('cors');
const PORT = 5000;
const app = express();

const retrieveAllMembers = require('./routes/allMembers');
const subscribe = require('./routes/subscription');
const roomChoice = require('./routes/roomDefinedById');
const sendInvitation = require('./routes/senderInvitation');
const changeSenderRoom = require('./routes/messageToUpdateRoom');
const switchSignalRecieve = require('./routes/inviteWithSignalRecieve');
const confirmFromAnotherUser = require('./routes/confirmationOtherUser');
const postMsgTerminal = require('./routes/terminalPost');
const getTerminalMsg = require('./routes/terminalGetMsg');
const msgPrivatePost = require('./routes/privatePost');
const msgPrivateGet = require('./routes/privateGetMsg');
const declineUserOne = require('./routes/declineInvitationUserOne');
const updateParamSecUser = require('./routes/secondUserParamUpdate');
const declineUserTwo = require('./routes/declineInvitationSecUser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

app.use(function(req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});

app.use('/api/getAllMembers', retrieveAllMembers);
app.use('/api/createMembers', subscribe);

app.use('/api/updateRoom/:id', roomChoice);
app.use('/api/inviteOtherUser/:id', sendInvitation);
app.use('/api/updateRoomToSender/:id', changeSenderRoom);
app.use('/api/setUserConfirm/:id', switchSignalRecieve);
app.use('/api/confirmationother/:id', confirmFromAnotherUser);
app.use('/api/updateFirstUserParams/:id', declineUserOne);
app.use('api/updateSecondUserParams/:id', updateParamSecUser);
app.use('api/cancelconfirmation/:id', declineUserTwo);

app.use('/api/msgTerminal', postMsgTerminal);
app.use('/api/retrieveMsgTerminal', getTerminalMsg);
app.use('/api/postprivate', msgPrivatePost);
app.use('/api/retrieveprivate', msgPrivateGet);

app.listen(PORT, (): void => {
  console.log(`[+] Server is running on port ${PORT} !`)
});

/*
//const db_users = require('db.json');
//FAST_REFRESH=false; (.env)
const users: any = [];
console.log(users)

//Simple login get - post
app.get('/login', (req:Request, res:Response, next:NextFunction) => {
  res.json(users)
  next()
})

app.post('/login', (req:Request, res:Response, next: NextFunction) => {
  const user = { username: req.body.username, password: req.body.password }
  users.push(user)
  console.log(users)
  res.status(201).send()
  next()
})

//catch all users
app.get('/db_users', (req:Request, res:Response, next:NextFunction) => {
  res.json(db_users)
  next()
})
*/