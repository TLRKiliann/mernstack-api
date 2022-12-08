import { app } from '../api/axiosconfig'
import { UserType } from '../models/usertype'

type UserTypeProps = {
  usertype: UserType[]
}

//server-json conf
const getUrl: string = 'http://localhost:3001/getAllMembers'
const postUrl: string = 'http://localhost:3001/postMsg'

/*real server
const getUrl: string = '/api/getAllMembers';*/

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

//POST msg from console
const postMsg = async (formData: any) => {
  try {
    const req = app.post<any>(postUrl)
    return await req.then((res: any) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};

//POST (add) new user
const postNewUser = async (user: string) => {
  try {
    const req = app.post<string>(postUrl)
    return await req.then((res: string) => res.data)
  } catch (err: any) {
    console.error("Error response PUT:");
    console.error("erd", err.response.data);    // ***
    console.error("ers", err.response.status);  // ***
    console.error("erh", err.response.headers); // ***
    throw err;
  } 
};

const functionToCall = {
  getAllMembers
  postMsg
};

export default functionToCall