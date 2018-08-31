<template>
  <div class="list">
    <template>
      <ul class="basic">
        <li>
          <a href="#">
            <h3>111111111</h3>
            <div class="info">22222222222</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  export default {
    name: "list",
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  .list .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
  }
  .list .content {
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .list h3 {
    margin-top: 0;
    margin-bottom: 0.6rem;
    line-height: 1.41;
    text-align: justify;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }

  .list p {
    line-height: 1.5;
    text-align: justify;
    color: #aaa;
    font-size: 1.2rem;
    overflow: hidden;
  }

  .list img {
    float: right;
    width: 25.6%;
    height: 8.678rem;
    margin-left: 2.5rem;
  }

  .list .author {
    font-size: 1.2rem;
    color: #ccc;
  }

  .list .label {
    position: absolute;
    bottom: 2.5rem;
    right: 1.8rem;
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
  }

  .basic h3 {
    padding: 0;
    line-height: 1.41;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }

  .basic .info {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #42bd56;
  }
</style>
