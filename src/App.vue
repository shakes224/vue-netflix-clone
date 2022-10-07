<template>
  <div id ="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld title="Cats" msg="Hello world" link="www.cats.com"/>
    <HelloWorld title="Big Cats" msg="Hello Shakes" link="www.bigcats.com"/>
    <HelloWorld title="Bigger Cats" msg="Hello Everyone" link="wwwbigger.cats.com"/>
    <HelloWorld title="Biggest Cats" msg="Hello to all" link="www.biggestcats.com"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
