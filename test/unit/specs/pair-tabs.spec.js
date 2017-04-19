import { createTest, destroyVM } from '../util';
import PairTabs from 'packages/pair-tabs';

describe('PairTabs', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PairTabs, true);
    expect(vm.$el).to.exist;
  });
});

