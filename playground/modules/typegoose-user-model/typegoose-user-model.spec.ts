import { typegooseUserModel } from './typegoose-user-model';

it('should return the correct value', () => {
  expect(typegooseUserModel()).toBe('Hello world!');
});
