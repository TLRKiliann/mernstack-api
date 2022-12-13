import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

type UserTypeProps = {
  usertype: UserType[]
}

//server-json conf
const getUrl: string = 'http://localhost:3001/db_users'
const updateNameRoom: string = 'http://localhost:3001/db_users'
const postInvite: string = 'http://localhost:3001/db_users'
const postLastConfirm: string = 'http://localhost:3001/db_users'
/*real server
const getUrl: string = '/api/getAllMembers';*/
//const updateNameRoom: string = '/api/updateRoom';

//GET all members of chat
const getAllMembers = async () => {
  try {
    const req = app.get<UserTypeProps>(getUrl)
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response POST:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};

//PUT firstname
const updateRoomName = (id: number, addRoomUser: UserTypeProps) => {
  try {
    let request = app.put<any>(`${updateNameRoom}/${id}`, addRoomUser)
    return request.then((response: any) => {
      response
      //console.log(response, "-- response --")
    })
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};

//PUT invitation
const putInvitation = (id: number, customMsg: any) => {
  try {
    const req = app.put<any>(`${postInvite}/${id}`, customMsg)
    return req.then((res: any) => res)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};

//PUT returnConfirm (db)
const updateFinalConfirm = (id: number, otherValidatingUser: any) => {
  try {
    const req = app.put<any>(`${postLastConfirm}/${id}`, otherValidatingUser)
    return req.then((res: any) => res)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};

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
  updateRoomName,
  putInvitation,
  updateFinalConfirm
};

export default functionToCall