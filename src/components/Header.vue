<template>
    <header>
      <div class="logo">
        <img src="../assets/favicon-32x32.png" alt="">
        TESTTASK
      </div>
      <nav>
        <a href="#registration">About me</a>
        <a href="#registration">Relationships</a>
        <a href="#registration">Requirements</a>
        <a href="#registration">Users</a>
        <a href="#registration">Sing up</a>
      </nav>

    </header>

</template>

<script>
export default {
name: "Header"
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
      justify-content: space-evenly
      width: 100%
      a
        margin-right: 0






</style>