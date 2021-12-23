import { userController } from './user-controller';

it('should return the correct value', () => {
  expect(userController()).toBe('Hello world!');
});
