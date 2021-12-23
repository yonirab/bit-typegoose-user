import React from 'react';
import { userRoutes } from './user-routes';

export function ReturnsCorrectValue() {
  return <div>{userRoutes()}</div>;
}
