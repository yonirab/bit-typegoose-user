import React from 'react';
import { typegooseUserModel } from './typegoose-user-model';

export function ReturnsCorrectValue() {
  return <div>{typegooseUserModel()}</div>;
}
