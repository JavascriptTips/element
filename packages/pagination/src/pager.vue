<template>
  <ul class="el-pager">
    <li>
      {{currentPage}}</li>
    <li class="slash">／</li>
    <li>
      {{pageCount}}</li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'ElPager',

    props: {
      currentPage: Number,

      pageCount: Number
    }
  };
</script>
