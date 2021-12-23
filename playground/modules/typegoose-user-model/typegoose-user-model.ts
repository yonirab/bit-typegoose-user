import { prop, getModelForClass } from "@typegoose/typegoose";

enum Gender {
  male = "male",
  female = "female",
}

export class User {
  @prop({ type: () => String, required: true, unique: true })
  public username: string;

  @prop({ type: () => String, required: true })
  public firstName: string;

  @prop({ type: () => String, required: true })
  public lastName: string;

  @prop({ type: () => String, enum: Object.values(Gender) })
  public gender: string;

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const UserModel = getModelForClass(User);

export function typegooseUserModel() {
  return UserModel;
}