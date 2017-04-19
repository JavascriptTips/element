import PairTabs from './src/main';

/* istanbul ignore next */
PairTabs.install = function(Vue) {
  Vue.component(PairTabs.name, PairTabs);
};

export default PairTabs;
