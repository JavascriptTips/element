import { createTest, destroyVM } from '../util';
import JdateTimePicker from 'packages/jdate-time-picker';

describe('JdateTimePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(JdateTimePicker, true);
    expect(vm.$el).to.exist;
  });
});

