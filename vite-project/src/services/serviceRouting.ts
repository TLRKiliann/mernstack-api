import { app } from '../api/axiosconfig';
import { UserType } from '../models/usertype';

type UserTypeProps = {
	usertype: UserType[]
}

//server-json conf
const getUrl: string = 'http://localhost:3001/getAllMembers';

/*real server
const getUrl: string = '/api/getAllMembers';*/

//GET
const getAllMembers = async () => {
  const req = app.get<UserTypeProps>(getUrl)
  return await req.then((res: any) => res.data)
};

const functionToCall = {
	getAllMembers
};

export default functionToCall;