<template>
  <section id='event-process'>
    <h1>Судейство</h1>
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
