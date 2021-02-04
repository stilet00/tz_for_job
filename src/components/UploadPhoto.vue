<template>
<div class="photos">
  <input type="file" @change="onFileSelected" required>
  <button
  @click.prevent="onUpload"
  >Upload photo</button>
</div>
</template>

<script>
export default {
name: "uploadPhoto",
  data() {
  return {
      selectedFile: null,
      correctFile: false
  }
  },
  methods: {
    onFileSelected(e) {
      if (e.target.files[0].type !== 'image/jpeg') {
        e.target.classList.add('inv_ext')
      } else if (e.target.files[0].size > 5000000) {
        e.target.classList.add('inv_size')
      } else {
        e.target.classList.remove('inv_ext')
        e.target.classList.remove('inv_size')
        this.selectedFile = e.target.files[0]
      }

    },
    onUpload() {
      this.$emit('photoAdded', {
        photo: this.selectedFile
      })
    }
  }
}
</script>

<style scoped lang="sass">
.inv_ext
  position: relative
  border: 1px solid red
  border-radius: 5px
  &::after
    content: 'Wrong file extension'
    position: absolute
    color: indianred
    left: 0
    bottom: -10px
.inv_size
  position: relative
  border: 1px solid red
  border-radius: 5px
  &::after
    content: 'Wrong file size'
    position: absolute
    color: indianred
    left: 0
    bottom: -10px


</style>