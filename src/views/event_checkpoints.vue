<template>
  <section id='event-checkpoints'>
    <h1>Отметка на трассе</h1>
    <router-link
      :to="{ name: 'event', params: { eventID: this.$route.params.eventID } }">
      К описанию
    </router-link>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>
