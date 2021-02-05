<template>
  <div class="main">
    <h1>Our cheerful users</h1>
    <p>Attention! Sorting users by registration date</p>
      <div class="photo-container">
        <User
            v-for="item in users"
            :key="item.name"
            :data="item"
        />


      </div>

    <SingUpButton
    inner="Show more"
    type="button"
    :disabled="noMoreUsers"
    @clickedOnMore="loadMore"
    />
  </div>


</template>

<script>
import User from "@/components/User";
import SingUpButton from "@/components/SingUpButton";
export default {
name: "UsersBlock",
  components: {SingUpButton, User},
  props: {
  reg: {
    type: Boolean,
  }
  },
  watch: {
    reg: function () {
      this.refreshList()
    }
  },
  mounted() {
    this.loadMore()
  },
  data() {
  return {
    users: [],
    page: 0,
    noMoreUsers: false
  }
  },
  methods: {
      loadMore() {
          this.page+=1;
          let promise=fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=' + this.page + '&count=6')
          promise
              .then(res => {
                if (res.ok && res.status === 200) {
                  return res.json()
                }
              })
              .then(res => {

                this.users.push(...res.users)
                if (res.users.length < 6) {
                  this.noMoreUsers = true
                }
              })
              .catch(err => {
                this.noMoreUsers = true
                console.log(err)})

      },
    refreshList() {
       this.users = []
       this.page = 0
       this.loadMore()
       this.noMoreUsers = false

    }
  }
}
</script>

<style scoped lang="sass">
$backgroundColor: #f9f9f3
.main
  text-align: center
  background: $backgroundColor
  padding: 50px 0 50px 0
  h1
    margin-bottom: 0
.photo-container
  margin: 80px auto
  max-width: 800px
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  button
    position: absolute
    bottom: 20px
    left: 40%

</style>