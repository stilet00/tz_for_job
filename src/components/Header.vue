<template>
<header>
  <div class="logo">
    <img src="../assets/favicon-32x32.png" alt="">
    TESTTASK</div>
  <nav>
    <router-link to="/">About me</router-link>
    <router-link to="/about">Relationships</router-link>
    <router-link to="/">Requirements</router-link>
    <router-link to="/about">Users</router-link>
    <router-link to="/about">Sing up</router-link>
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
  //position: fixed
  display: flex
  justify-content: space-between
  background: #f9f9f3
  padding: 5px 20px
nav
  a
    margin-right: 20px
    text-decoration: none
    color: grey
    &:visited
      color: #5f5d5d
.logo
  display: flex
  align-items: center
  letter-spacing: 5px
  font-weight: 600
  img
    margin-right: 1em
</style>