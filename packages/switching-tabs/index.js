import SwitchingTabs from './src/main';

/* istanbul ignore next */
SwitchingTabs.install = function(Vue) {
  Vue.component(SwitchingTabs.name, SwitchingTabs);
};

export default SwitchingTabs;
