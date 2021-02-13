<template>
<div class="second-container">
  <h1>Let's get acquainted</h1>
  <div class="inner">
    <img src="../assets/man-laptop-v1.svg" alt="" height="250px">
    <div class="text">
      <h3>I am cool frontend developer</h3>
      <p>
        We will evaluate how clean your approach to writing CSS and javascript code is.
        You can use any CSS and javascript 3rd party libraries without any restriction.
      </p>
      <p>
       if 3rd party css/javascript libraries are added to the project via bower/npm/yarn
        you will get bonus points. If you use task runner (gulp/webpack) you will get bonus points
        as well. Slice service directory page PSD mockup into HTML5/CSS3
      </p>
      <a href="#registration">Sing up now</a>
    </div>


  </div>
</div>
</template>

<script>
export default {
name: "SecondPart"
}
</script>

<style scoped lang="sass">
.second-container
  text-align: center
  padding: 100px 10px
  .inner
    display: flex
    flex-wrap: wrap
    img
      margin-right: 50px
    .text
      text-align: left
      width: 60%
      a
        width: 30%
        padding: 10px 0px 10px 0
        text-align: left
        font-weight: bold
        letter-spacing: 1px
        font-size: 15px
        background: inherit
        color: #e75959
        border-radius: 5px
        outline: none
        border: none
        text-decoration: none
        &:hover
          background: #ec8383
          color: white
@media(max-width: 812px)
  .inner
    .text
      width: 45% !important
@media (max-width: 375px)
  .second-container
    padding: 10% 10px
    h1
      font-size: 3em
  .inner
    .text
      width: 100% !important






</style>