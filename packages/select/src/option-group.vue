<template>
  <ul class="el-select-group__wrap">
    <li class="el-select-group__title"
        @click.stop="selectOptionClick"
        v-show="visible">{{ currentLabel }}</li>
    <li>
      <ul class="el-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'el-option-group',

    componentName: 'ElOptionGroup',

    props: {
      value: {
        required: true
      },
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true,
        groupDisabled: false
      };
    },
    computed: {
      currentLabel() {
        return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
      }
    },

    watch: {
      currentLabel() {
        this.dispatch('ElSelect', 'setSelected');
      },
      disabled(val) {
        this.broadcast('ElOption', 'handleGroupDisabled', val);
      }
//      value() {
//        this.dispatch('ElSelect', 'setSelected');
//      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      },
//      hoverItem() {
//        if (!this.disabled && !this.groupDisabled) {
//          this.parent.hoverIndex = this.parent.options.indexOf(this);
//        }
//      },

      selectOptionClick() {
        if (this.disabled !== true && this.groupDisabled !== true) {
          this.dispatch('ElSelect', 'handleOptionClick', this);
          console.log('option-group select', this.value, this.label);
        }
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>