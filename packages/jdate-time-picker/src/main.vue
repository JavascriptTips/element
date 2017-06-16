<template>
  <div class="el-jdate-time-picker">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElJdateTimePicker',
  props: {
    value: String,
    minDate: [Date, String],
    maxDate: [Date, String],
    minDateTime: [Date, String],
    maxDateTime: [Date, String],
    timePicker: Boolean
  },
  data() {
    return {
    };
  },
  computed: {
    $input() {
      const $ = window.$;

      var input = this.$slots.default[0];
      var $input;

      if (input) {
        $input = input.tag === 'input' ? $(input.elm) : $(input.elm).find('input');

        $input.val(this.value);

      }
      return $input;
    },
    option() {
      var option = {
        showOtherMonths: true,
        selectOtherMonths: true,
        timeFormat: this.timePicker ? 'HH:mm:ss' : undefined,
        onSelect: (e)=>{

          this.$input.datetimepicker('setDate', e);

          this.$emit('input', this.$input.val());
        }
      };
      let dateScope = {};
      ['minDate', 'maxDate', 'minDateTime', 'maxDateTime'].map((item) => {
        if (typeof this[item] === 'object') {
          dateScope[item] = this[item] || this[item + 'Time'];
        };
      });
      option = Object.assign(
        option,
        dateScope
      );

      return option;
    }
  },
  mounted() {

    this.$nextTick(()=>{

      if (this.$input) {
        const $input = this.$input;

        $input.on('click', ()=>{
          const pickerInst = $input.data('datepicker');

          if (pickerInst && pickerInst.settings) {
            Object.assign(pickerInst.settings, this.option);
          } else {
            if (this.timePicker) {
              $input.datetimepicker(Object.assign({}, this.option));
            } else {
              $input.datepicker(Object.assign({}, this.option));
            }
          }
          requestAnimationFrame(() => {
            $input.datepicker('refresh');
            if (this.timePicker) {
              $input.datetimepicker('show');
            } else {
              $input.datepicker('show');
            }
          });
        });
      }
    });
  }
};
</script>
