import React from 'react';
import { userMain } from './user-main';

export function ReturnsCorrectValue() {
  return <div>{userMain()}</div>;
}
