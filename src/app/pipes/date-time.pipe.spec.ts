import { DateTimePipe } from './date-time.pipe';

describe('DateTimePipe', () => {
  it('create an instance', () => {
   const pipe = new DateTimePipe(Date());
   console.log(" pipe in test ",pipe);
   
    expect(pipe).toBeTruthy();
  });
});
