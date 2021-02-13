<template>
  <header>
    <div class="logo">
      <img src="../assets/favicon-32x32.png" alt="">
      TESTTASK
    </div>
    <button
        @click="showHide"
        v-if="smartPhone"
    >
      <img src="../assets/menu_icon.svg" alt="">
    </button>
    <transition v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false">
      <nav id="nav-1" v-if="show">
        <a href="#registration">About me</a>
        <a href="#registration">Relationships</a>
        <a href="#registration">Requirements</a>
        <a href="#registration">Users</a>
        <a href="#registration">Sing up</a>
      </nav>
    </transition>


  </header>

</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: "Header",
  data() {
    return {
      smartPhone: false,
      show: true
    }
  },
  methods: {
    showHide() {
      this.show = !this.show
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, translateY: '20px'}, { duration: 300 })
      Velocity(el, { fontSize: '12px', translateY: '0px' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px' }, { duration: 600 })
      Velocity(el, {
        opacity: 0
      }, { complete: done })
    }
  },
  mounted() {
    if (window.screen.width < 500) {
      this.smartPhone = true;
      this.show = false;
    } else {
      this.smartPhone = false;
    }
  }
}
</script>


<style lang="sass" scoped>
header
  position: fixed
  width: 60%
  margin: 0 auto
  display: flex
  justify-content: space-between
  background: #f9f9f3
  box-sizing: border-box
  padding: 5px 20px
  max-width: 1170px
  button
    margin: 0 auto
nav
  display: flex
  align-items: center
  font-size: 12px
  font-weight: bold
  a
    margin-right: 20px
    text-decoration: none
    color: grey
    &:hover
      color: indianred!important
    &:visited
      color: #5f5d5d
    &:active
      color: cornflowerblue
.logo
  display: flex
  align-items: center
  letter-spacing: 5px
  font-weight: 600
  img
    margin-right: 1em


@media (max-width: 568px)
  header
    flex-flow: wrap
    .logo
      width: 100%
      justify-content: center
    nav
      font-size: 10px
      display: flex
      flex-direction: column
      justify-content: space-evenly
      width: 100%
      a
        margin-right: 0



//animate

.fade-enter-active, .fade-leave-active
  transition: opacity 1s ease-out

.fade-enter, .fade-leave-to
  opacity: 0
  transform: translatey(-20px)


</style>