<template>
  <div class="pages-view">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar';
  export default {
    name: "pages-view",
    data(){
      return {

      }
    },
    components: {HeaderBar}
  }
</script>

<style scoped>

</style>
