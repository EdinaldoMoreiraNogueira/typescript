interface TechObjet {
  title: string,
  experience: number,
}



interface createUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechObjet> // multiplos objetos. Ex: string, number..
  //techs: string[] array simples
}


export default function createUser({name, email, password}:createUserData){

  const user = {
   name,
   email,
   password,

  }

  return user;
}