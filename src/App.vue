<template>
  <div>
      <header id="head">
          <router-link style="text-decoration: none; color: black;" to="/">
              Home
          </router-link>

          <router-link style="text-decoration: none; color: black;" to="/about/mark">
              About Mark
          </router-link>
          <router-link style="text-decoration: none; color: black;" to="/about/elon">
              About Elon
          </router-link>
          <router-link style="text-decoration: none; color: black;" to="/api">
              All users
          </router-link>
      </header>
      <router-view></router-view> 
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  // components: {
  //     HelloWorld
  // }
};
</script>

<style>
#head {
  background-color: lightgray;
  padding: 20px;
  display: flex;
  gap: 30px;
}
</style>
