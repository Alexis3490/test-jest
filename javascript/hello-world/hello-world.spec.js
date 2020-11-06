import { helloWorld } from './hello-world';

describe('Hello World', () => {
  test('name is empty', () => {
    expect(helloWorld()).toEqual('Hello, World!');
  });
  test('name is parameters', () => {
    expect(helloWorld('Test')).toEqual('Hello, Test!');
  });
  test('name is Majdi  with parameters', () => {
    expect(helloWorld('Majdi')).toEqual('Yooooo!');
  });
  test('name is parameters not validate', () => {
    expect(helloWorld(['Test'])).toEqual('Error parameters name is not type string');
  });
});
