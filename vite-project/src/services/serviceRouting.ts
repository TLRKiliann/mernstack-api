import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

type UserTypeProps = {
  usertype: UserType[]
}

//server-json conf
/*const getUrl: string = 'http://localhost:3001/db_users'
const updateNameRoom: string = 'http://localhost:3001/db_users'
const putInvite: string = 'http://localhost:3001/db_users'
const putLastConfirm: string = 'http://localhost:3001/db_users'
const putChgUsrRetConf: string = 'http://localhost:3001/db_users'
*/

//real server
const getUrl: string = "/api/getAllMembers";
const postNewMember: string = "/api/createMembers";
const updateNameRoom: string = '/api/updateRoom';
const putInvite: string = '/api/inviteOtherUser';
const putLastConfirm: string = '/api/confirmation';
const putChgUsrRetConf: string = '/api/setUserConfirm';

//GET all members of chat
const getAllMembers = async () => {
  try {
    const req = app.get<UserType>(getUrl)
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    throw err;
  } 
}

//POST new Member
const createMember = (newMember: any) => {
  try {
    const req = app.post<any>(postNewMember, newMember)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.log("Error response POST (create new member)")
    console.log("erd", err.res.data);
    console.log("ers", err.res.status);
    console.log("erh", err.res.headers);
    throw err;
  }
}

//PUT firstname
const updateRoomName = (id: number, changeConfRoom: UserTypeProps) => {
  try {
    let request = app.put<any>(`${updateNameRoom}/${id}`, changeConfRoom)
    return request.then((response: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

//PUT invitation
const putInvitation = (id: number, dataForSigMsg: any) => {
  try {
    const req = app.put<any>(`${putInvite}/${id}`, dataForSigMsg)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

//PUT username + returnConfirm
const updateUsrRetConf = (id: number, changeUserNameReturnConfirm: any) => {
  try {
    const req = app.put<any>(`${putChgUsrRetConf}/${id}`, changeUserNameReturnConfirm)
    return req.then((res: any) => {
      console.log(res.data)
    })
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

//PUT returnConfirm (db)
const updateFinalConfirm = (id: number, changeReturnConf: any) => {
  try {
    const req = app.put<any>(`${putLastConfirm}/${id}`, changeReturnConf)
    return req.then((res: any) => {
      console.log(res.data)
    })
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

/*
//POST (add) new user
const postNewUser = async (user: string) => {
  try {
    const req = app.post<string>(postUrl)
    return await req.then((res: string) => res.data)
  } catch (err: any) {
    console.error("Error response POST:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};*/

const functionToCall = {
  getAllMembers,
  createMember,
  updateRoomName,
  putInvitation,
  updateUsrRetConf,
  updateFinalConfirm
};

export default functionToCall

/*
*/