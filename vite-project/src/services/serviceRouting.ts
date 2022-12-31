import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

//real server
const getUrl: string = "/api/getAllMembers";
const postNewMember: string = "/api/createMembers";
const updateNameRoom: string = '/api/updateRoom';
const putInvite: string = '/api/inviteOtherUser';
const updateRoomSender: string = '/api/updateRoomToSender';
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

//PUT returnConfirm (db)
const updateToResetParamsFirstUser = (id: number, resetParamsUserOne: any) => {
  //console.log(id, "id")
  try {
    const req = app.put<any>(`${updateResetParamsOne}/${id}`, resetParamsUserOne)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
}

const updateToResetParamsSecondUser = (id: number, resetParamsUserTwo: any) => {
  //console.log(id, "id")
  try {
    const req = app.put<any>(`${updateResetParamsSecond}/${id}`, resetParamsUserTwo)
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
