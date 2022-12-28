import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

const retrieveMsgTerminal: string = '/api/retrieveMsgTerminal';
const postRouteMsgTerminal: string = '/api/msgTerminal';

//retrieve data to display into terminal
const getMsgTerminal = async () => {
  try {
    const req = app.get<UserType>(retrieveMsgTerminal);
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    throw err;
  }
}

//post data to db
const postMsgTerminal = (msgTerminal: string) => {
  //console.log(msgTerminal)
  try {
    const req = app.post<any>(postRouteMsgTerminal, msgTerminal)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err
  }
}

const functionTerminalCall = {
  getMsgTerminal,
  postMsgTerminal
}

export default functionTerminalCall