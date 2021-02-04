<template>
<div class="container">
  <Header />
  <SimpleForm />
</div>
</template>

<script>
import Header from "@/components/Header";
import SimpleForm from "@/views/SimpleForm";
export default {
  name: "Container",
  components: {SimpleForm, Header}
}
</script>

<style lang="sass" scoped>
.container
  width: 80%
  height: 200px
  margin: 0 auto
  background: grey
</style>