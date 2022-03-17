<template>
  <div>
<nav>
<h1 class="brand">Media<span style="color:#d40000">Hub</span></h1>
</nav>


<router-view />
  </div>
  
</template>

<script>


export default {

};
</script>


<style>
#app {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
}

nav {
  padding: 30px;
  text-align: left;
  
}

nav .brand {
  font-size: 2em !important;
}

.page {
  text-align: left;
}

</style>
