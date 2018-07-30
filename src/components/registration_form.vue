<template>
  <section id='registration-form' class='my-5'>
    <h5>Зарегистрироваться на событие</h5>
    <form>
      <div class="row">
        <div class="col-6 mb-3">
          <label for="firstName">Имя</label>
          <input type="text" class='form-control' id="firstName" v-model='registration.firstName'>
        </div>
        <div class="col-6 mb-3">
          <label for="lastName">Фамилия</label>
          <input type="text" class='form-control' id="lastName" v-model='registration.lastName'>
        </div>
      </div>
      <div class="mb-3">
        <label for="age">Возраст</label>
        <input type="number" id='age' class='form-control' v-model='registration.age'>
      </div>
      <button class='btn btn-primary' type="button" v-on:click='save'>Зарегистрироваться</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      registration: {
        firstName: '',
        lastName: '',
        age: 0,
        eventID: this.event.id
      }
    }
  },
  methods: {
    ...mapActions({
      saveRegistration: 'registrations/create'
    }),
    save () {
      this.saveRegistration(this.registration)
    }
  }
}
</script>
