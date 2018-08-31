<template>
  <div class="home-view has-header">
    <SubNav></SubNav>
    <List></List>
  </div>
</template>

<script>
  import SubNav from '../components/SubNav'
  import List from '../components/List'
  export default {
    name: "Home",
    data(){
      return {

      }
    },
    components: {
      SubNav, List
    }
  }
</script>

<style scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
