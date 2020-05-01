<template>
  <div id="app">
    <PeopleCount/>
    <notifications group="foo" />
  </div>
</template>

<script>
import PeopleCount from "./components/PeopleCount";

export default {
  name: "App",
  components: {
    PeopleCount
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
