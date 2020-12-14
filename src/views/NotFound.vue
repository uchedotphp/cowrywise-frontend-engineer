<template>
  <div>
    <Error :resource="resource" />
  </div>
</template>

<script>
import Error from "@/components/Error";
export default {
  name: "NotFound",
  mounted () {
    console.log('the prop',this.resource);
  },
  components: {
    Error
  },
  props: {
    resource: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
</style>