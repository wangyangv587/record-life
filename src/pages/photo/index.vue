<template>

  <div>

    <TypeSelect/>
  </div>
</template>

<script>
    import TypeSelect from "@/components/type-select/index";

    export default {
        name: "index",
        components:{
            'TypeSelect':TypeSelect
        }
    }
</script>

<style scoped>

</style>
