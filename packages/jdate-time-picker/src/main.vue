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
  mounted() {

    this.$nextTick(()=>{
      const $ = window.$;

      var input = this.$slots.default[0];
      var $input;

      if (input) {

        $input = input.tag === 'input' ? $(input.elm) : $(input.elm).find('input');

        $input.val(this.value);

        var option = {
          showOtherMonths: true,
          selectOtherMonths: true,
          timeFormat: this.timePicker ? 'HH:mm:ss' : undefined,
          onSelect: (e)=>{

            $input.datetimepicker('setDate', e);

            this.$emit('input', $input.val());
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

        $input.on('click', ()=>{

          if (this.timePicker) {
            $input.datetimepicker(option);
            $input.datetimepicker('show');
          } else {
            $input.datepicker(option);
            $input.datepicker('show');
          }
        });
      }
    });
  }
};
</script>
