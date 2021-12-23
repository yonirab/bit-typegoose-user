import { UserModel, findByUsername } from '@yonirab/playground.modules.typegoose-user-model';

export async function createUser({
  username,
  firstname,
  lastname,
  password,
}: any) {
  const user = await UserModel.create({
    username,
    firstname,
    lastname,
    password
  });

  return user;
}

export async function findUser(username: string) {
    const user = await findByUsername(username);
    return user;
}


export function userController() {
  return 'Hello world!';
}
