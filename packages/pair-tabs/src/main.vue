<template>
  <div class="el-pair-tabs">
      <ul class="el-pair-tabs__tabs" :class="{
          'el-pair-tabs__tabs--small': size === 'small'
        }" >
        <li
          v-for="(tab, index) in activeTabs"
          :class="{
            active: tab.active,
          }"
          @click="switchTab(tab.i)" >
          {{tab.name}}
        </li>
      </ul>
      <div ref="box" class="el-pair-tabs__box">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ElPairTabs',
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String
  },
  data() {
    return {
      curIndex: 0
    };
  },
  computed: {
    activeTabs() {
      return [this.tabs[this.curIndex]].concat(this.tabs.filter((name, i) => {
        return i !== this.curIndex;
      })).map((name, i) => {
        return {
          name,
          active: i === 0,
          i: this.tabs.indexOf(name)
        };
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.showIndex(this.curIndex);
    });
    this.$watch('tabs', () => {
      this.$nextTick(() => {
        this.showIndex(this.curIndex);
      });
    });
  },
  methods: {
    switchTab(index) {
      this.curIndex = index;
      this.showIndex(index);
    },
    showIndex(index) {
      const children = this.$refs.box.children;
      if (children.length > 0) {
        [].map.call(children, (node, i) => {
          node.style.display = i === index ? 'block' : 'none';
        });
      }
    }
  }
};
</script>
