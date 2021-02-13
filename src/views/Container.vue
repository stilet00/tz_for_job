<template>
<div class="container">
  <Header />
    <FirstPart />
    <SecondPart />
    <UsersBlock
        :reg="regSuccess"
    />
    <SimpleForm
    @success="regDone"
    />



</div>
</template>

<script>
import SimpleForm from "@/views/SimpleForm";
import UsersBlock from "@/views/UsersBlock";
import FirstPart from "@/views/FirstPart";
import SecondPart from "@/views/SecondPart";
import Header from "@/components/Header";
export default {
  name: "Container",
  data() {
    return {
      regSuccess: false
    }
  },
  methods: {
    // making users block know that registration is successful so it needes to refresh
    regDone() {
      this.regSuccess = !this.regSuccess
    }
  },
  components: {Header, SecondPart, FirstPart, UsersBlock, SimpleForm}
}
</script>

<style lang="sass" scoped>
.container
  width: 60%
  max-width: 1170px
  margin: 0 auto
@media(max-width: 1024px)
  .container
    width: 90%
  header
    width: 90%
@media(max-width: 320px)
  .container
    width: 100%
  header
    width: 100%









</style>