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
    minDate: Date,
    maxDate: Date,
    minDateTime: Date,
    maxDateTime: Date,
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
      option = Object.assign(
        option,
        {
          minDate: this.minDate,
          maxDate: this.maxDate,
          minDateTime: this.minDateTime,
          maxDateTime: this.maxDateTime
        }
      );

      return option;
    }
  },
  mounted() {

    this.$nextTick(()=>{

      if (this.$input) {
        const $input = this.$input;

        $input.on('click', ()=>{
          $input.datetimepicker(this.option);

          if (this.timePicker) {
            $input.datetimepicker('show');
          } else {
            $input.datepicker('show');
          }
        });
      }
    });
  }
};
</script>
