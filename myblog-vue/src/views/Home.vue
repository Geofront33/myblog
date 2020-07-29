<template>
  <div id="homePage">
    <div id="child">
      <p>Hello World!</p>
      <router-link to="/login">
        <button>Start</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>

<style lang="stylus">
  #homePage
    height 100%
    width 100%
    position fixed
    background-image url("../assets/home.jpg")
    background-repeat no-repeat
    background-size cover
    #child
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      height 250px
      text-align center
    p
      color white
      font-size 50px
      font-weight 100
    button
      background-color black
      color white
      font-size 20px
      border-radius 4px
      height 40px
      width 100px
      border none
      opacity 0.7
      outline none
    button:hover
      opacity 1
      cursor pointer
</style>