import React from 'react';
import { userController } from './user-controller';

export function ReturnsCorrectValue() {
  return <div>{userController()}</div>;
}
