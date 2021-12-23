import { typegooseUserModel } from '@yonirab/playground.modules.typegoose-user-model';

export async function createUser({
  username,
  firstName,
  lastName,
  gender,
}: any) {
  const user = await typegooseUserModel().create({
    username,
    gender,
    firstName,
    lastName,
  });

  return user;
}


export function userController() {
  return 'Hello world!';
}
