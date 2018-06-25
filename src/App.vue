<template>
  <div id="app">
    <div class="container">
      <layout-header />
      <layout-menu />
      <router-view/>
    </div>
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/header'
import LayoutMenu from '@/components/layout/top_menu'
import LayoutFooter from '@/components/layout/footer'

export default {
  name: 'App',
  components: { LayoutHeader, LayoutMenu, LayoutFooter }
}
</script>

<style lang='scss'>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './styles/custom-bootstrap.scss';

.event-run { color: Green;}
.event-triathlon { color: Magenta;}
.event-rogain { color: Red;}
.event-orienting { color: Brown;}
</style>
