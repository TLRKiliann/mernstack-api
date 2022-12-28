import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

const retrieveMsgPrivate: string = '/api/retrieveprivate';
const postPrivate: string = '/api/postprivate';

const getMsgPrivate = async () => {
  try {
    const req = app.get<UserType>(retrieveMsgPrivate);
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    throw err;
  }
}

const postMsgPrivate = (msgPrivate: string) => {
  //console.log(msgPrivate)
  try {
    const req = app.post<any>(postPrivate, msgPrivate)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err
  }
}

const functionPrivateCall = {
  getMsgPrivate,
  postMsgPrivate
}

export default functionPrivateCall