<template>
  <button
      @click="clicked"
      :type="type"
      :disabled="disabled"
  >{{inner}}</button>
</template>

<script>
export default {
name: "SingUpButton",
  props: {
    type: String,
    inner: String,
    disabled: {type: Boolean, default: false}

  },
  methods: {
  clicked() {
    this.$emit('clickedOnMore')
  }
  }
}
</script>

<style scoped lang="sass">
button
  width: 30%
  padding: 10px 10px
  margin-top: 20px
  margin-bottom: 20px
  font-weight: 500
  letter-spacing: 1px
  font-size: 15px
  background: #e75959
  color: white
  border-radius: 5px
  outline: none
  border: none
  &:active
    background: #cf3030
  &:disabled
    background: #b5b4b4
    color: grey

.inactive
  bakcgorund

</style>