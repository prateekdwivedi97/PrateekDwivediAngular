import { Form } from './form';

describe('Form', () => {
  it('should create an instance', () => {
    expect(new Form(100,"Prateek",30000,"Java")).toBeTruthy();
  });
});
