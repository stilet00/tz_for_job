<!--
This upload menu may be needed again, so I made it as a component
-->
<template>
<div class="photos">
  <input type="file" name="file" id="file" class="inputfile" required @change="onFileSelected"/>
  <label for="file">{{selectedFile ? selectedFile.name : "Choose a file"}}</label>

  <button
      @click.prevent="onUpload"
  >Upload</button>
  <span>Error</span>
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
      if (e.target.files[0].type !== 'image/jpeg' || e.target.files[0].size > 5000000) {
        e.target.nextSibling.classList.add('err_upload')
        e.target.parentNode.lastElementChild.classList.add('err-shown')

      } else {
        e.target.nextSibling.classList.remove('err_upload')
        e.target.parentNode.lastElementChild.classList.remove('err-shown')
        this.selectedFile = e.target.files[0]

      }

    },
    onUpload() {
      this.$emit('photoAdded', {
        photo: this.selectedFile
      })
      this.selectedFile = null
    }
  }
}
</script>

<style scoped lang="sass">
.photos
  width: 100%
  display: flex
  flex-wrap: wrap
  align-items: center
.inputfile
  width: 0.1px
  height: 0.1px
  opacity: 0
  overflow: hidden
  position: absolute
  z-index: -1
.inputfile + label
  margin-top: 10px
  width: 85%
  height: 3em
  color: grey
  font-size: 15px
  border: 1px solid darkgrey
  padding: 10px
  box-sizing: border-box
  border-top-left-radius: 5px
  border-bottom-left-radius: 5px
  border-right: none
button
  font-family: inherit
  background: transparent
  outline: none
  width: 15%
  height: 3.5em
  margin-top: 10px
  border-color: darkgrey
  border-bottom-right-radius: 5px
  border-top-right-radius: 5px
  &:hover
    border-color: cornflowerblue
  &:active
    background: aliceblue
span
  color: red
  opacity: 0
  margin: 0
.err_upload
  border: 1px solid red!important
.err-shown
  opacity: 1!important




</style>