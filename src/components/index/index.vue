<template>
    <div>
        <headTop  />
    </div>
</template>
<script>
import headTop from "./header";
export default {
  data() {
    return {
      data: ""
    };
  },
  components: {
    headTop
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      this.$http.get("../../../static/fustbuy.json").then(res => {
        console.log(res);
        that.data = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>
