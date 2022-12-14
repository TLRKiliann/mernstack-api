import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

type UserTypeProps = {
  usertype: UserType[]
}

//server-json conf
const getUrl: string = 'http://localhost:3001/db_users'
const updateNameRoom: string = 'http://localhost:3001/db_users'
const putInvite: string = 'http://localhost:3001/db_users'
const putLastConfirm: string = 'http://localhost:3001/db_users'
const putChgUsrRetConf: string = 'http://localhost:3001/db_users'
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
const updateRoomName = (id: number, changeConfRoom: UserTypeProps) => {
  try {
    let request = app.put<any>(`${updateNameRoom}/${id}`, changeConfRoom)
    return request.then((response: any) => {
      //response
      console.log(response.data, "-- response --")
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
const putInvitation = (id: number, dataForSigMsg: any) => {
  try {
    const req = app.put<any>(`${putInvite}/${id}`, dataForSigMsg)
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
};

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
};

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
};

/*
2 derniers echecs
--------------------------------------------------

PUT /db_users/[object%20Object] 400 0.973 ms - -
PUT /db_users/[object%20Object] 404 4.045 ms - 2

--------------------------------------------------

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
  updateUsrRetConf,
  updateFinalConfirm
};

export default functionToCall