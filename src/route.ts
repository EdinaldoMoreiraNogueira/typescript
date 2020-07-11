import { Request, Response} from 'express';
import createUser from './services/createUser';



export function HelloWord(request: Request, response: Response) {

  const user = createUser({ 
  email:'edinaldomoreiranog@gmail.com',
  password:'1234', 
  techs:['NodeJs',
   'React',
   'ReactNative',
   { title: 'javascript', experience: 100 },
  
  ],

});
  return response.json({mensage: "hello word"})

}
