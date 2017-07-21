<template>
  <transition name="dialog-fade">
    <div class="el-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        class="el-dialog"
        :class="[sizeClass, customClass]"
        ref="dialog"
        :style="style">
        <div class="el-dialog__header" :class="{'el-dialog__header--bottom': titleBottom}">
          <span class="el-dialog__title">{{title}}</span>
          <span class="el-dialog__title--small" v-html="subtitle"></span>
          <div class="el-dialog__headerbtn">
            <i v-if="showClose" class="el-dialog__close el-icon el-icon-close" @click='close()'></i>
          </div>
        </div>
        <div class="el-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'element-ui/src/utils/popup-old/';

  export default {
    name: 'el-dialog',

    mixins: [Popup],

    props: {
      title: {
        type: String,
        default: ''
      },

      subtitle: {
        type: String,
        default: ''
      },

      titleBottom: {
        type: Boolean,
        default: true
      },

      modal: {
        type: Boolean,
        default: true
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      size: {
        type: String,
        default: 'small'
      },

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: '15%'
      }
    },
    data() {
      return {
        visible: false
      };
    },

    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
        if (val) {
          this.$emit('open');
          this.$nextTick(() => {
            const dialogWidth = parseInt(getComputedStyle(this.$refs.dialog).width, 10);
            this.$refs.dialog.scrollTop = 0;
            this.$refs.dialog.style.marginLeft = `-${dialogWidth / 2}px`;
          });
        } else {
          this.$emit('close');
        }
      }
    },

    computed: {
      sizeClass() {
        return `el-dialog--${ this.size }`;
      },
      style() {
        return this.size === 'full' ? {} : { 'margin-bottom': '50px', 'top': this.top };
      }
    },

    methods: {
      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.close();
        }
      }
    },

    mounted() {
      if (this.value) {
        this.rendered = true;
        this.open();
      }
    }
  };
</script>
