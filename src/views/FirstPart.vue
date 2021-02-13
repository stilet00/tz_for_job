<template>
<div class="first-container">
  <div class="text">
    <h1>test assigment</h1>
    <h1>for frontend</h1>
    <h1>developer position</h1>
    <p>We kindly remid you that your test assigment should be submitted
      as a link to github/bitbucket repository. Please be patient, we consider and respond to every
      application that meets minimum requirements. We look forward to your submission. Good luck! The
      photo has to scale in the banner area on the different screens</p>
  </div>
  <a href="#registration">
  <SingUpButton
  inner="Sing up now"
  type="button"
  />
  </a>
</div>
</template>

<script>
import SingUpButton from "@/components/SingUpButton";
export default {
name: "FirstPart",
  components: {SingUpButton}
}
</script>

<style scoped lang="sass">
.first-container
  background-image: url("../assets/banner-photo.jpg")
  background-size: cover
  padding: 80px 30px
  display: flex
  flex-direction: column
  justify-content: center
  box-sizing: border-box
.text

  box-sizing: border-box
  width: 60%
  color: white
  word-break: break-word
  h1
    text-transform: uppercase
    margin: 0
@media(max-width: 812px)
  .text
    display: flex
    flex-wrap: wrap
    width: 100%
    justify-content: space-between
    h1
      &:nth-child(1)
        width: 100%
      &:nth-child(2)
        width: 100%

      &:nth-child(3)
        width: 100%
  button
    width: 100%
@media(max-width: 768px)
  .text
    display: block
    width: 100%

@media (max-width: 568px)
  h1
    font-size: 1.2em
  p
    font-size: 12px




</style>