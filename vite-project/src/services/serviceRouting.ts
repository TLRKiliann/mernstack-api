import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

type UserTypeProps = {
  usertype: UserType[]
}

//real server
const getUrl: string = "/api/getAllMembers";
const postNewMember: string = "/api/createMembers";
const updateNameRoom: string = '/api/updateRoom';
const putInvite: string = '/api/inviteOtherUser';
const updateRoomSender: string = '/api/updateRoomToSender';
const putResponseUser: string = '/api/confirmationother';
const putChgUsrRetConf: string = '/api/setUserConfirm';
const postRouteMsgTerminal: string = '/api/msgTerminal';
const retrieveMsgTerminal: string = '/api/retrieveMsgTerminal';
const postPrivate: string = '/api/postprivate';
const retrieveMsgPrivate: string = '/api/retrieveprivate';
const updateResetParamsOne: string = '/api/updateFirstUserParams';
const updateResetParamsSecond: string = '/api/updateSecondUserParams';

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
const updateRoomName = (id: number, changeConfRoom: UserType) => {
  try {
    let req = app.put<any>(`${updateNameRoom}/${id}`, changeConfRoom)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error res PUT:");
    console.error("erd", err.res.data);    // ***
    console.error("ers", err.res.status);  // ***
    console.error("erh", err.res.headers); // ***
    throw err;
  } 
}

//PUT invitation
const putInvitation = (id: number, dataForVersusUser: any) => {
  try {
    const req = app.put<any>(`${putInvite}/${id}`, dataForVersusUser)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

//Update room to sender (invitation)
const putInvitationSender = (id: number, changeRoomSender: any) => {
  try {
    const req = app.put<any>(`${updateRoomSender}/${id}`, changeRoomSender)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

//PUT username + signalRecieve + returnConfirm
const updateUsrRetConf = (id: number, changeUserNameReturnConfirm: any) => {
  console.log(id, "id service")
  try {
    const req = app.put<any>(`${putChgUsrRetConf}/${id}`, changeUserNameReturnConfirm)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

//PUT returnConfirm (db)
const updateResponseUser = (id: number, changeReturnConf: any) => {
  console.log(id, "id")
  try {
    const req = app.put<any>(`${putResponseUser}/${id}`, changeReturnConf)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

const getMsgTerminal = async () => {
  try {
    const req = app.get<UserType>(retrieveMsgTerminal);
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    throw err;
  }
}

const postMsgTerminal = (msgTerminal: string) => {
  console.log(msgTerminal)
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

const getMsgPrivate = async () => {
  try {
    const req = app.get<UserType>(retrieveMsgPrivate);
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    throw err;
  }
}

const postMsgPrivate = (msgPrivate: string) => {
  console.log(msgPrivate)
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

//PUT returnConfirm (db)
const updateToResetParamsFirstUser = (findUserOneById: number, resetParamsUserOne: any) => {
  console.log(findUserOneById, "findUserOneById")
  try {
    const req = app.put<any>(`${updateResetParamsOne}/${findUserOneById}`, resetParamsUserOne)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

const updateToResetParamsSecondUser = (findUserTwoById: number, resetParamsUserTwo: any) => {
  console.log(findUserTwoById, "findUserTwoById")
  try {
    const req = app.put<any>(`${updateResetParamsSecond}/${findUserTwoById}`, resetParamsUserTwo)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  }
}

const functionToCall = {
  getAllMembers,
  createMember,
  updateRoomName,
  putInvitation,
  putInvitationSender,
  updateUsrRetConf,
  updateResponseUser,
  getMsgTerminal,
  postMsgTerminal,
  getMsgPrivate,
  postMsgPrivate,
  updateToResetParamsFirstUser,
  updateToResetParamsSecondUser
};

export default functionToCall

/*
//server-json (routing)
const getUrl: string = 'http://localhost:3001/db_users'
const updateNameRoom: string = 'http://localhost:3001/db_users'
const putInvite: string = 'http://localhost:3001/db_users'
const putLastConfirm: string = 'http://localhost:3001/db_users'
const putChgUsrRetConf: string = 'http://localhost:3001/db_users'
*/