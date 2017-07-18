<template>
  <transition name="el-zoom-in-top">
    <div class="el-table-screen" v-show="showPopper">
      <ul class="el-table-screen__list">
        <li class="el-table-screen__list-item"
            v-for="(screen, index) in screens"
            :label="screen.value"
            :class="{ 'is-active': screen.value === screenValue }"
            @click="handleSelect(screen.value)" >
            {{ screen.text }}
            <i v-if="index === 0" :class="['el-icon-caret-bottom', column.screenOpened ? 'el-icon-caret-top' : '']"></i>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
  // import Popper from '@qp/qp-element-ui/src/utils/vue-popper';
  import Locale from '@qp/qp-element-ui/src/mixins/locale';
  import Clickoutside from '@qp/qp-element-ui/src/utils/clickoutside';
  import Dropdown from './dropdown';

  export default {
    name: 'el-table-screen-panel',

    mixins: [Locale],

    directives: {
      Clickoutside
    },

    props: {
      placement: {
        type: String,
        default: 'bottom-end'
      }
    },

    methods: {
      isActive(screen) {
        return screen.value === this.screenValue;
      },

      handleOutsideClick() {
        this.showPopper = false;
      },

      handleSelect(screenValue) {
        this.screenValue = screenValue;
        this.confirmScreen(this.screenValue);

        this.handleOutsideClick();
      },

      confirmScreen(screenValue) {
        this.column.screenMethod.call(null, screenValue, this.column);
      }
    },

    data() {
      return {
        table: null,
        cell: null,
        column: null,
        showPopper: false,
        screenValue: ''
      };
    },

    computed: {
      screens() {
        // if (this.column && this.column.screens) {
        //   const list = this.column.screens.sort((pre, next) => {
        //     if (next.value === this.screenValue) {
        //       return true;
        //     }
        //   });
        //   return list;
        // }
        return this.column && this.column.screens;
      }
    },

    mounted() {
      this.popperElm = this.$el;
      this.referenceElm = this.cell;
      // this.table.bodyWrapper.addEventListener('scroll', () => {
      //   this.updatePopper();
      // });

      this.$watch('showPopper', (value) => {
        if (this.column) this.column.screenOpened = value;
        if (value) {
          Dropdown.open(this);
        } else {
          Dropdown.close(this);
        }
      });
    }
  };
</script>
