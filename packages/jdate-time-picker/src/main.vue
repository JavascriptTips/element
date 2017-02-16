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
    timePicker: Boolean
  },
  data() {
    return {
    };
  },
  mounted() {

    var minDate = this.minDate ? new Date(this.minDate) : new Date();

    if (minDate.getSeconds() === 0) {
      var cs = new Date().getSeconds();
      minDate.setSeconds(cs);
    }

    this.$nextTick(()=>{
      const $ = window.$;

      var input = this.$slots.default[0];
      var $input;

      if (input) {

        $input = input.tag === 'input' ? $(input.elm) : $(input.elm).find('input');

        $input.val(this.value);

        const option = {
          showOtherMonths: true,
          selectOtherMonths: true,
          timeFormat: this.timePicker ? 'HH:mm:ss' : undefined,
          minDateTime: minDate,
          onSelect: (e)=>{

            $input.datetimepicker('setDate', e);

            this.$emit('input', $input.val());
          }
        };

        $input.on('focus', ()=>{

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
