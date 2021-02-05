<template>
  <div class="form-main">
    <div class="form" id="form-block">
      <form @submit.prevent="getToken">
        <h1 id="registration">Register to get a work</h1>
        <p>Attention! After soccessful registration and alert, update the list of users in the block from the top</p>
        <div class="inputs-block">
          <div class="inputs">
            <label>Name</label>
            <input
                @focusout="checkName"
                @keyup="checkName"
                required
                id="name"
                v-model="user.name"
                type="text"
                :placeholder="user.name || 'Enter your name'"
                class="field"
            >
            <span>Error</span>
          </div>

          <div class="inputs">
            <label>Email</label>
            <input
                @focusout="checkEmail"
                @keyup="checkEmail"
                required
                id="email"
                v-model="user.email"
                type="email"
                :placeholder="user.email || 'Your email'"
                class="field"
            />
            <span>Error</span>
          </div>
          <div class="inputs">
            <label>Phone number</label>
            <input
                @focusout="checkPhone"
                @keyup="checkEmail"
                required
                id="tel"
                v-model="user.phoneNumber"
                type="tel"
                :placeholder="user.phoneNumber || '+3 80 XX XXX XX XX'"
                class="field"
            />
            <span>Error</span>
          </div>

          <div class="inputs">
            <h3>Select your position</h3>
            <div class="radios">
              <input
                  required
                  type="radio"
                  v-model="user.position"
                  :value="1"
                  name="positions"
              />
              <label>Security</label>

            </div>

            <div class="radios">
              <input
                  type="radio"
                  v-model="user.position"
                  :value="2"
                  name="positions"
              />
              <label>Designer</label>
            </div>
            <div class="radios">
              <input
                  type="radio"
                  v-model="user.position"
                  :value="3"
                  name="positions"
              />
              <label>Content manager</label>
            </div>
            <div class="radios">
              <input
                  type="radio"
                  v-model="user.position"
                  :value="4"
                  name="positions"
              />
              <label>Lawyer</label>
            </div>
          </div>
          <div class="inputs">
            <label>Photo</label>
            <UploadPhoto
            @photoAdded="addPhoto"
            />

            <p class="added-photo" v-if="this.user.photo">{{this.user.photo.name}}</p>
          </div>

        </div>


        <SingUpButton
        type="submit"
        inner="Sing up now"
        />

      </form>
    </div>
  </div>



</template>

<script>
import axios from 'axios'
import UploadPhoto from "@/components/UploadPhoto";
import SingUpButton from "@/components/SingUpButton";

export default {
  components: {SingUpButton, UploadPhoto},
  data () {
    return {
      user: {
        name: null,
        email: null,
        phoneNumber: null,
        position: null,
        photo: null,
        validation: false,
        token: null,
      }
    }
  },
  methods: {
    getToken() {
      if (this.user.validation) {
        axios
            .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(res => {
              this.user.token = res.data.token
            })
            .catch(err => console.log(err))
      }
        setTimeout(this.sendForm, 2000)


    },
    checkName(e) {
      let regExpName = /^[a-z\d]{2,60}$/
      if (regExpName.test(this.user.name)) {
        e.target.classList.remove('wrong-field')
        e.target.nextSibling.classList.remove('err-shown')
        this.user.validation = true

      } else {
        e.target.classList.add('wrong-field')
        e.target.nextSibling.classList.add('err-shown')
        this.user.validation = false
      }

    },
    checkEmail(e) {
      let regExpEmail = /^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
      if (regExpEmail.test(this.user.email)) {
        e.target.classList.remove('wrong-field')
        e.target.nextSibling.classList.remove('err-shown')
        this.user.validation = true

      } else {
        e.target.classList.add('wrong-field')
        e.target.nextSibling.classList.add('err-shown')
        this.user.validation = false
      }

    },
    checkPhone(e) {
      let regExpTel = /^\+380[\d]{9}$/
      if (regExpTel.test(this.user.phoneNumber)) {
        e.target.classList.remove('wrong-field')
        e.target.nextSibling.classList.remove('err-shown')
        this.user.validation = true

      } else {
        e.target.classList.add('wrong-field')
        e.target.nextSibling.classList.add('err-shown')
        this.user.validation = false
      }

    },
    addPhoto(data) {
      this.user.photo = data.photo;
    },
    sendForm() {
      if (this.user.token) {
        let formData = new FormData()
        formData.append('name', this.user.name)
        formData.append('email', this.user.email)
        formData.append('phone', this.user.phoneNumber)
        formData.append('position_id', this.user.position)
        formData.append('photo', this.user.photo)

        let promise = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
          method: 'POST',
          body: formData, headers: {'Token': this.user.token}
        })
        promise
            .then(res => {
              if (res.ok && res.status === 201) {
                return res.json()
              } else {
                return Promise.reject(res.status);
              }
            })
            .then(res => {
              this.regDone(res)
              this.displayMessage('User has been registered', 'green')
              this.clearAll()
            })
            .catch(err => {
              this.displayMessage('Failed to registered', 'red')
              console.log(err)
            })
      }

    },
    clearAll() {
      this.user.name = null
      this.user.email = null
      this.user.phoneNumber = null
      this.user.position = null
      this.user.photo = null
      this.user.validation = false
      this.user.token = null
    },
    regDone() {
      this.$emit('success')
    },
    displayMessage(text, color) {
      const msgContainer = document.createElement('div')
      const message = document.createElement('h1')
      const style1 = msgContainer.style
      const style2 = message.style
      message.innerHTML = text
      style1.position = 'absolute'
      style1.border = '5px solid grey'
      style1.width = '100%'
      style1.margin = "0 auto"
      style1.borderRadius = '10px'
      style1.bottom = '50%'
      style2.color = color
      msgContainer.append(message)
      document.getElementById('form-block').append(msgContainer)
      setTimeout(() => {
        msgContainer.remove()
      }, 2000)
    }
  }
}
</script>
<style scoped lang="sass">
.form-main
  width: 100%
  padding-top: 100px
.container
  background: white
  width: 100%
.form
  text-align: center
  width: 80%
  margin: 0 auto
  display: flex
  flex-direction: column
  align-items: center
  position: relative

  p
    display: inline-block
    width: 65%
    margin: 0 auto
    font-size: 15px
    &.added-photo
      border-radius: 5px
      box-sizing: border-box
  span
    color: red
    opacity: 0
    margin: 0
  input
    box-sizing: border-box
    padding-left: 10px
    width: 100%
    outline: none
    height: 3.5em
    margin-top: 5px
    border-radius: 5px
    border: 1px solid darkgrey

.inputs-block
  margin: 0 auto
  box-sizing: border-box
.inputs
  box-sizing: border-box
  margin-top: 10px
  text-align: left
  &:first-child
    margin-top: 20px
.radios
  display: flex
  align-items: center
  input
    width: 20px
    margin: 0 10px 0 0

.wrong-field
  border-color: red!important
  position: relative
.err-shown
  opacity: 1!important



</style>
