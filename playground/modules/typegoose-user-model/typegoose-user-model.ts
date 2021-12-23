import { prop, getModelForClass } from "@typegoose/typegoose";

export class User {
  @prop({ type: () => String, required: true, unique: true })
  public username!: string;

  @prop({ type: () => String })
  public firstname?: string;

  @prop({ type: () => String })
  public lastname?: string;

  @prop({ type: () => String, required: true })
  public password!: string;

  public get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

}

export const UserModel = getModelForClass(User);

export const findByUsername = async (username) =>
  await UserModel.findOne(username);


export function typegooseUserModel() {
  return 'Hello world!';
}