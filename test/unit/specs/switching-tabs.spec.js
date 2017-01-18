import { createTest, destroyVM } from '../util';
import SwitchingTabs from 'packages/switching-tabs';

describe('SwitchingTabs', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(SwitchingTabs, true);
    expect(vm.$el).to.exist;
  });
});

