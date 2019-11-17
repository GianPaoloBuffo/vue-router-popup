<template>
  <div id="app">
    <nav class="nav-wrap">
      <div class="container">
        <RouterLink to="/" class="logo">LOGO</RouterLink>
      </div>
    </nav>
    <main class="main container">
      <RouterView/>
    </main>
    <PortalTarget name="popup"/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  max-height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav-wrap {
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #ccc;
}

.main {
  margin-top: 2em;
}

.container {
  max-width: 42em;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
}
</style>
