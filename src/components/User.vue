<template>
  <div>
    <img :src="data.photo" alt=""
    v-if="data.photo !== 'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png'"
    >
    <img
        v-else
        src='../assets/photo-cover.png' alt="">
    <h2>{{data.name}}</h2>
    <p class="position">{{data.position}}</p>
    <p class="email">{{data.email}}</p>
    <p>{{data.phone}}</p>
  </div>

</template>

<script>
export default {
name: "User",
  props: {
  data: Object
  }


}
</script>

<style scoped lang="sass">
div
  box-sizing: border-box
  width: 216px
  background: #f9f9f3
  display: flex
  justify-content: space-between
  flex-direction: column
  align-items: center
  margin: 0 1em 55px 1em

img
  border-radius: 50%
h2
  word-break: break-all
  margin: 24px 0 24px 0
p
  word-break: break-all
  margin: 0
  &.position
    margin-bottom: 15px
  &.email
    margin-bottom: 12px
@media (max-width: 568px)
  h2
    margin: 0
    font-size: 1em
  *p
    margin-bottom: 7px!important
    font-size: 10px
    line-height: 10px


</style>