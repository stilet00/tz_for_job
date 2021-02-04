<template>
  <div class="form-main">
    <div class="form">
      <form @submit.prevent="getToken">
        <h1>Register to get a work</h1>
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
                placeholder="Your name"
                class="field"
            >
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
                placeholder="Your email"
                class="field"
            />
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
                placeholder="+3 80 XX XXX XX XX"
                class="field"
            />
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
          </div>


        </div>


        <button type="submit">Submit</button>

      </form>

      <pre>{{ user }}</pre>
    </div>
  </div>



</template>

<script>
import axios from 'axios'
import UploadPhoto from "@/components/UploadPhoto";

export default {
  components: {UploadPhoto},
  data () {
    return {
      user: {
        name: '',
        email: '',
        phoneNumber: '',
        position: null,
        photo: null,
        validation: false,
        token: null
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
        this.user.validation = true

      } else {
        e.target.classList.add('wrong-field')
        this.user.validation = false
      }

    },
    checkEmail(e) {
      let regExpEmail = /^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
      if (regExpEmail.test(this.user.email)) {
        e.target.classList.remove('wrong-field')
        this.user.validation = true

      } else {
        e.target.classList.add('wrong-field')
        this.user.validation = false
      }

    },
    checkPhone(e) {
      let regExpTel = /^\+380[\d]{9}$/
      if (regExpTel.test(this.user.phoneNumber)) {
        e.target.classList.remove('wrong-field')
        this.user.validation = true

      } else {
        e.target.classList.add('wrong-field')
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
              if (res.ok && res.status === 200) {return res.json()}
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
      }

    }
  }
}
</script>
<style scoped lang="sass">
.form-main
  width: 100%
  background: black
  padding-top: 10em
.container
  background: white
  width: 100%
.form
  text-align: center
  width: 80%
  margin: 0 auto
  background: whitesmoke
  display: flex
  flex-direction: column
  align-items: center
  h1
    font-size: 40px
    letter-spacing: 2px
  p
    display: inline-block
    width: 65%
    margin: 0 auto
    font-size: 15px
  input
    width: 100%
    outline: none
    height: 2.5em
    margin-top: 5px
    border-radius: 5px
    padding-left: 10px
    border: 1px solid transparent


.inputs-block
  width: 60%
  margin: 0 auto
.inputs
  margin-top: 20px
  text-align: left
.radios
  display: flex
  align-items: center
  input
    width: 20px
    margin: 0 20px 0 0
.wrong-field
  border-color: red!important


</style>
