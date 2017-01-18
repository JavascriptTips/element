<template>
  <div class="el-switching-tabs">

    <nav class="el-switching-tabs__header">
      <ul>
        <li
          v-for="(title,index) in tabs"
          :data-index="index"
          :class="['el-switching-tabs__tab',{
            'el-switching-tabs__tab--active': index === tabIndex
            }]"
          @click="changeTab"  >
          {{title}}
        </li>
      </ul>
    </nav>

    <div class="el-switching-tabs__content" ref="content">
      <slot>
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ElSwitchingTabs',

  props: {
    tabs: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      tabIndex: 0
    };
  },

  mounted() {

    this.hideChilren(0);
  },

  methods: {
    hideChilren(index) {
      [].forEach.call(this.$refs.content.children, (node, i)=> {

        node.style.display = i === index ? 'block' : 'none';
      });

      this.tabIndex = index;
    },
    changeTab(e) {
      const i = parseInt(e.currentTarget.dataset.index, 10);

      if (i !== this.tabIndex) {
        this.hideChilren(i);
      }
    }
  }
};
</script>
