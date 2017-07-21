<template>
  <transition name="dialog-fade">
    <div class="el-dialog__wrapper" v-show="visible || value" @click.self="handleWrapperClick">
      <div
        class="el-dialog"
        :class="[sizeClass, customClass]"
        ref="dialog"
        :style="style">
        <div class="el-dialog__header" :class="{'el-dialog__header--bottom': titleBottom}">
          <slot name="title">
            <span class="el-dialog__title">{{title}}</span>
          </slot>
          <span class="el-dialog__title--small" v-html="subtitle"></span>
          <button type="button" class="el-dialog__headerbtn" aria-label="Close"
                  v-if="showClose" @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered">
          <slot></slot>
        </div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'element-ui/src/utils/popup';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDialog',

    mixins: [Popup, emitter],

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

      modalAppendToBody: {
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
      },
      beforeClose: Function,

      value: Boolean
    },

    watch: {
      visible(val) {
        this.$emit('update:visible', val);
        this.$emit('input', val);
        if (val) {
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            const dialogWidth = parseInt(getComputedStyle(this.$refs.dialog).width, 10);
            this.$refs.dialog.scrollTop = 0;
            this.$refs.dialog.style.marginLeft = `-${dialogWidth / 2}px`;
          });
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          this.$emit('close');
        }
      },
      value(val) {
        if (val) {
          this.$emit('open');
          this.open();
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            const dialogWidth = parseInt(getComputedStyle(this.$refs.dialog).width, 10);
            this.$refs.dialog.scrollTop = 0;
            this.$refs.dialog.style.marginLeft = `-${dialogWidth / 2}px`;
          });
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          this.close();
          this.$emit('close');
        }
      }
    },

    computed: {
      sizeClass() {
        return `el-dialog--${ this.size }`;
      },
      style() {
        return this.size === 'full' ? {} : { 'top': this.top };
      }
    },

    methods: {
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('value', false);
          this.$emit('visible-change', false);
          this.$emit('input', false);
        }
      },
      updatePopper() {
        this.broadcast('ElSelectDropdown', 'updatePopper');
        this.broadcast('ElDropdownMenu', 'updatePopper');
      }
    },

    mounted() {
      if (this.value || this.visible) {
        this.rendered = true;
        this.open();
      }
    }
  };
</script>
