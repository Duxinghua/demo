<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./src/assets/svg.scss";
img{
   content:'normal'!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

  p {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 50px;
    background: pink;
    border: 2px solid transparent;
    border-image: svg(1px-border param(--color #000)) 1 stretch;
  }
  div {
    width: 200px;
    height: 200px;
    margin: 50px auto 0;
    border: 2px solid transparent;
    border-image: svg(1px-border2 param(--color blue)) 1 stretch;
  }
</style>
