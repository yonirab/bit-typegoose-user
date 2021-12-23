import { userRoutes } from './user-routes';

it('should return the correct value', () => {
  expect(userRoutes()).toBe('Hello world!');
});
