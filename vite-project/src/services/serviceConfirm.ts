import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

const putResponseUser: string = '/api/confirmationother';
const putChgUsrRetConf: string = '/api/setUserConfirm';
const cancelConf: string = '/api/cancelconfirmation';

//PUT returnConfirm (db)
const updateResponseUser = (id: number, changeReturnConf: any) => {
  //console.log(id, "id")
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

//PUT username + signalRecieve + returnConfirm
const updateUsrRetConf = (id: number, changeUserNameReturnConfirm: any) => {
  //console.log(id, "id service")
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

const updateUsrCancelConf = (id: number, reinitializeCancelConfirm: any) => {
  //console.log(id, reinitializeCancelConfirm, 'id et reinitializeCancelConfirm')
  try {
    const req = app.put<any>(`${cancelConf}/${id}`, reinitializeCancelConfirm)
    return req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  }
}

const functionToConfirm = {
  updateResponseUser,
  updateUsrRetConf,
  updateUsrCancelConf
}

export default functionToConfirm