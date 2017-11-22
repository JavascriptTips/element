<template>
  <div
    class="el-steps"
    :class="['is-' + direction, center ? 'is-center' : '']">
    <slot></slot>
  </div>
</template>

<script>
import react from 'react';
import reactDOM from 'react-dom';
import Step from 'qnui/lib/step';

export default {
  name: 'ElSteps',

  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    center: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    },
    names: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },

  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
      this.mountQnSteps();
    },

    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    }
  },
  mounted() {
    if (this.names.length) {
      this.mountQnSteps();
    }
  },
  methods: {
    mountQnSteps() {
      if (this.rEl) {
        reactDOM.unmountComponentAtNode(this.$el);
      }

      const items = this.names.map((name, i) => {
        return react.createElement(Step.Item, {
          key: i,
          title: name
        });
      });
      const sp = react.createElement(Step, {
        current: this.active,
        type: 'arrow'
      }, items);
      this.rEl = reactDOM.render(sp, this.$el);
    }
  }
};
</script>
