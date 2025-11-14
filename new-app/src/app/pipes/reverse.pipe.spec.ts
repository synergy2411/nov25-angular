import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse the string', () => {
    const reverseString = pipe.transform('Hello');
    expect(reverseString).toEqual('olleH');
  });
});
