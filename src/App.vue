<template>
  <div id="app">

      <Container />
    <router-view/>
  </div>
</template>

<style lang="sass">
$primary-color: #ef5b4c
$secondaty-color: #007bff
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap')
body
  font-family: 'Open Sans', sans-serif
</style>
<script>
import Container from "@/views/Container";
export default {
  components: {Container}
}
</script>